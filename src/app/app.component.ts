import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StreamService } from './services/stream.service';
import { TdtChannelDto } from './model/dto/tdt-channel-dto.interface';
import { DeviceDetectorService } from 'ngx-device-detector';
import { VgHlsDirective } from '@videogular/ngx-videogular/streaming';
import { COUNTRIES } from 'src/assets/data/countries';
import { MediaTypesEnum } from './model/enum/media-types.enum';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { NgSelectComponent } from '@ng-select/ng-select';
import { GridViewTypeEnum } from './model/enum/grid-view-type.enum';
import { ContentTypesEnum } from './model/enum/content-types.enum';
import { ActivatedRoute } from '@angular/router';
import { TdtChannelEpgDto } from './model/dto/tdt-channel-epg-dto.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  backoffice: boolean = false;

  @ViewChild(VgHlsDirective) vgHls!: VgHlsDirective;

  @ViewChild('channelSelector') channelSelector!: NgSelectComponent;

  supportedFormats: string[] = ['m3u8', 'mp3', 'youtube'];
  MediaTypesEnum = MediaTypesEnum;
  currentFormat?: MediaTypesEnum | string;
  GridViewTypeEnum = GridViewTypeEnum;

  isMobile!: boolean;
  isTablet!: boolean;
  isWindows!: boolean;
  isMac!: boolean;
  isIOS!: boolean;
  isAndroid!: boolean;
  orientation!: string;
  portrait!: boolean;
  landscape!: boolean;
  
  title = 'tvplayer';
  
  // Streaming
  headers: any = {};
  hlsBitrates: any;
  logoUrl?: string;
  channelName: string = '';
  channelId: string | null | undefined;
  streamUrl?: string;
  streamUrl$ = new BehaviorSubject<string>('');

  // Epg
  currentEpg?: TdtChannelEpgDto;
  
  channels: TdtChannelDto [] = [];
  channelsFiltered: TdtChannelDto [] = [];

  epgs: TdtChannelEpgDto[] = [];
  selectedEpgIndex = 0;

  loadChannelsSubscription?: Subscription;
  routeQueryParamsSubscription?: Subscription;
  loadCEpgsSubscription?: Subscription;

  private youtubeApiLoaded = false;
  youtubeVideoIdentifier?: string;
  youtubePlayerConfig: any = {
    controls: 1,
    mute: 1,
    autoplay: 1
  };

  streamForm!: FormGroup;

  countries: { name: string, iso2: string, numChannels: number }[] = [];
  contentTypes: ContentTypesEnum[] = [];

  gridViewForm!: FormGroup;
  gridViewType: GridViewTypeEnum = GridViewTypeEnum.LAST;
  gridViewTypesFormValues: { text: string, value: GridViewTypeEnum} [] = [
    { text: 'Historic', value: GridViewTypeEnum.LAST },
    { text: '+ Views', value: GridViewTypeEnum.TOP }
  ]

  history: TdtChannelDto[] = [];
  historyLength: number = 5;

  topList: { channel: TdtChannelDto, views: number}[] = [];
  topListLength: number = 5;

  testURL: string = '';

  isLocalhost: boolean = false;

  constructor(
    private streamService: StreamService,
    private deviceDetector: DeviceDetectorService,
    private route: ActivatedRoute
  ) {

    this.streamUrl$.subscribe((url) => {
      this.currentFormat = undefined;
      this.streamUrl = undefined;
      if (url && url.length>0) {
          this.currentFormat = MediaTypesEnum.M3U8;
        if (this.getFormat(url)===MediaTypesEnum.M3U8) {
          this.streamUrl = url;
          this.currentFormat = MediaTypesEnum.M3U8;
        } else if (this.getFormat(url)===MediaTypesEnum.MP3) {
          setTimeout(() => {
            this.streamUrl = url;
            this.currentFormat = MediaTypesEnum.MP3;
          }, 1000);
        } else if (this.getFormat(url)===MediaTypesEnum.YOUTUBE) {
          this.streamUrl = url;
          this.currentFormat = MediaTypesEnum.YOUTUBE;
          if (url.indexOf('channel')>0) {
            this.getYoutubeIdFromChannelUrl(url).subscribe({
              next: (_id) => {
                this.youtubeVideoIdentifier = _id
              }  
            });
          } else {
            this.getYoutubeVideoIdFromUrl(url).subscribe({
              next: (_id) => {
                this.youtubeVideoIdentifier = _id
              }  
            });
          }
        } else {
          this.streamUrl = url.replace('parent=play.tdtchannels.com', 'parent=localhost');
          console.log('streamUrl', this.streamUrl.replace('parent=play.tdtchannels.com', 'parent=localhost'));
          this.currentFormat = MediaTypesEnum.STREAM;
        }
      } else {
        this.streamUrl = undefined;
      }
    });
  }
  
  getFormat(url: string): MediaTypesEnum | undefined {
    if (url.indexOf(MediaTypesEnum.M3U8)>=0) {
      return MediaTypesEnum.M3U8;
    } else if (url.indexOf(MediaTypesEnum.MP3)>=0) {
      return MediaTypesEnum.MP3;
    } else if (url.startsWith('https://www.youtube.com')) {
      return MediaTypesEnum.YOUTUBE;
    } else {
      return MediaTypesEnum.STREAM;
    }
  }

  // Request youtube video id from a youtube channel url
  getYoutubeIdFromChannelUrl(url: string): Observable<string> {
    let channelId = url;
    return this.streamService.getYoutubeLiveVideoId(channelId);
  }

  get youtubeVideoId() {
    return this.youtubeVideoIdentifier;
  }

  // Get video id from a simple youtube url
  getYoutubeVideoIdFromUrl(url: string): Observable<string> {
    if (!url) return of('');
    const regex = /(?:youtube\.com\/(?:.*v=|v\/|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    const res = match ? match[1] : '';
    return of(res);
  }

  doTestURL() {
    const testUrl: string = this.testURL;
    if (
      testUrl?.length>0 && 
      (testUrl.toLowerCase().endsWith('.m3u8') || testUrl.startsWith('https://www.youtube.com/watch?v='))) {
      this.streamUrl$.next(testUrl);
    }
  }

  doCountChannelView(channel: TdtChannelDto) {
    const channelIndex: number = this.topList.findIndex((_chViews) => _chViews.channel.epg_id===channel.epg_id );
    if (channelIndex>=0) {
      this.topList[channelIndex].views++;
    } else {
      this.topList.push({ channel: channel, views: 1 });
    }
    this.doUpdateChannelsViews();
  }

  doUpdateChannelsViews() {
    this.topList = this.topList.sort((a, b) => {
      return a.views >= b.views ? -1 : 1;
    });
    localStorage.setItem('APP_TVPLAYER_TOP', JSON.stringify(this.topList));
  }

  doUpdateCurrentEpg(channel: TdtChannelDto) {
    this.currentEpg = undefined;
    const epgIndex = this.epgs.findIndex((_epg) => _epg.name===channel.epg_id);
    if (epgIndex>=0) {
      this.currentEpg = this.epgs[epgIndex];
      this.selectedEpgIndex = this.getCurrentEpgEventIndex();
    } else {
      this.selectedEpgIndex = 0;
      this.currentEpg = undefined;
    }
    console.log('doUpdateCurrentEpg', {epgs: this.epgs, selectedEpgIndex: this.selectedEpgIndex});
  }

  doUpdateStreamUrl(channelName: string) {
    const channel: TdtChannelDto | undefined = this.channels.find((_channel) => _channel.name===channelName );
    console.log('doUpdateStreamUrl()', channel);

    if (channel && channel.epg_id) {
      this.doUpdateCurrentEpg(channel);
    } else {
      this.currentEpg = undefined;
      this.selectedEpgIndex = 0;
    }

    this.streamUrl$.next((channel?.options && channel?.options.length>0 && channel?.options[0].url) ? channel?.options[0].url : '');
    this.logoUrl = channel?.logo;
    this.channelName = channelName;
    this.channelId = channel?.epg_id;
    if (channel?.epg_id) {
      this.history = this.history.filter((_channel) => _channel.epg_id!==channel.epg_id);
      this.history.unshift(channel);
      this.history = this.history.slice(0,this.historyLength);
      this.updateHistory(this.history);
      this.doCountChannelView(channel);
    }
  }

  selectChannelFromHistory(channel: TdtChannelDto) {
    //console.log('selectChannelFromHistory', channel, channel.epg_id);
    const channelId: string | null | undefined = channel.epg_id;

    if (channel && channel.epg_id) {
      this.doUpdateCurrentEpg(channel);
    }

    this.streamUrl$.next((channel?.options && channel?.options.length>0 && channel?.options[0].url) ? channel?.options[0].url : '');
    this.logoUrl = channel.logo;
    this.channelName = channel.name;
    
    if (channelId) {
      this.history = this.history.filter((_channel) => _channel.epg_id!==channel.epg_id);
      this.history.unshift(channel);
      this.history = this.history.slice(0,this.historyLength);
      this.updateHistory(this.history);
      this.doFilter(channel);
    }
    this.channelId = channelId;
  }

  getCountryName(iso2: string) {
    let countryName: string = '';
    const country = (COUNTRIES as {cca2: string, name: { common: string }}[]).find((_country) => {
      return _country.cca2.toLowerCase() === iso2.toLowerCase();
    });
    return country ? country.name.common : countryName;
  }

  doFilter(selectedChannel?: TdtChannelDto) {
    // console.log('doFilter()', selectedChannel);
    if (!this.streamForm.get('country')?.value || this.streamForm.get('country')?.value.length===0) {
      this.channelsFiltered = [...this.channels];
    } else {
      this.channelsFiltered = [...this.channels.filter((_channel) => _channel.country===this.streamForm.get('country')?.value )];
    }

    if (!this.streamForm.get('contentType')?.value || this.streamForm.get('contentType')?.value.length===0) {
      this.channelsFiltered = [...this.channelsFiltered];
    } else {
      this.channelsFiltered = [...this.channelsFiltered.filter((_channel) => {
        return _channel.contentTypes && _channel.contentTypes.includes(this.streamForm.get('contentType')?.value);
      })];
    }
    
    if (!selectedChannel) {
      this.streamForm.patchValue({'channel': undefined});
    } else {
      this.streamForm.patchValue({'country': selectedChannel.country});
      this.streamForm.patchValue({'channel': selectedChannel.name});
      this.streamUrl$.next(selectedChannel.options[0].url);

      if (selectedChannel.epg_id) {
        this.channelId = selectedChannel.epg_id;
        this.channelName = selectedChannel.name;
        this.currentFormat = selectedChannel.options[0].format;
      }
    }
  } 

  recoverHistory() {
    let strHistory: string | null = localStorage.getItem('APP_TVPLAYER_HISTORY');

    if (strHistory!=null && strHistory.length>0) {
      if ((JSON.parse(strHistory) as any[]).length>0 && typeof (JSON.parse(strHistory) as any[])[0] === 'string') {
        strHistory = '[]';
        this.updateHistory([]);
      }
      this.history = (JSON.parse(strHistory) as TdtChannelDto[]).slice(0,this.historyLength);

      this.history.forEach((_channel) => {
        if (!_channel.logoBgStyle) {
          this.setChannelLogoBg(_channel);
        }
      });

    } else {
      this.history = [];
    }
  }

  updateHistory(history: TdtChannelDto[]) {
    history = this.history.slice(0,this.historyLength);
    localStorage.setItem('APP_TVPLAYER_HISTORY', JSON.stringify(history))
  }

  updateGridViewType() {
    this.gridViewType = this.gridViewForm.get('gridViewType')?.value;
  }

  getChannel(channelId: string): TdtChannelDto | undefined {
    return this.channels.find((_channel) => _channel.epg_id===channelId);
  }

  /* Set logo img bg style depending on image luminosity */
  setChannelLogoBg(channel: TdtChannelDto) {
    channel.logoBgStyle = (channel.logoBgStyle) ? channel.logoBgStyle : 'light';
  }

  contentTypeHasChannels(type: ContentTypesEnum): boolean {
    return this.getTypeCount(type) > 0;
  }

  getTypeCount(type: ContentTypesEnum): number {
    const formValues: { 
      channel?: string,
      country?: string,
      contentType?: ContentTypesEnum
    } = this.streamForm.getRawValue() as { 
      channel: string,
      country: string,
      contentType: ContentTypesEnum
    };
    return this.channels.filter((_channel) => {
      const matches: boolean = _channel && _channel.contentTypes!=undefined && _channel.contentTypes.includes(type);
      if (!matches || (formValues.country && formValues.country.length>0 && _channel.country!=formValues.country)) {
        return false;
      }
      return matches;
    }).length;
  }

  setupChannels() {
    this.channelsFiltered = [...this.channels];
  }

  setupCountries() {
    this.countries = [];
    this.channels.forEach((_channel) => {
      if (_channel.country && _channel.country?.length>0 && !this.countries.find((_c) => _c.iso2===_channel.country )) {
        const countryName: string = this.getCountryName(_channel.country);
        if (countryName?.length>0) {
          this.countries.push({
            iso2: _channel.country,
            name: this.getCountryName(_channel.country),
            numChannels: this.channels.filter((_c) => _c.country===_channel.country ).length
          });
        }
      }
    });
    this.countries.sort((a,b) => a.name<=b.name ? -1 : 1 );
    this.countries.unshift({ name: 'All countries', iso2: '', numChannels: this.channels.length });
  }

  initForms() {
    this.streamForm = new FormGroup({
      channel: new FormControl(this.channelName),
      country: new FormControl(''),
      contentType: new FormControl(undefined)
    });
    this.gridViewForm = new FormGroup({
      gridViewType: new FormControl(this.gridViewType)
    });
  }

  configHistory() {
    this.recoverHistory();

    if (this.history.length>0) {
      const lasChannelViewed: TdtChannelDto | undefined = this.history[0];

      if (lasChannelViewed && lasChannelViewed.epg_id) {
        this.doUpdateCurrentEpg(lasChannelViewed);
      }

      this.streamUrl$.next(lasChannelViewed ? lasChannelViewed.options[0].url : this.streamUrl = this.channels[0].options[0].url);
      this.logoUrl = (lasChannelViewed) ? lasChannelViewed.logo : undefined;
      this.channelName = (lasChannelViewed) ? lasChannelViewed.name : this.channels[0].name;
      this.channelId = (lasChannelViewed) ? lasChannelViewed.epg_id : undefined;
      this.currentFormat = (lasChannelViewed) ?  lasChannelViewed.options[0].format : undefined;
    } else {
      this.logoUrl = this.channels[0].logo;
      this.streamUrl$.next(this.channels[0].options[0].url);
      this.channelName = this.channels[0].name;
      this.channelId = this.channels[0].epg_id;
      this.currentFormat = this.channels[0].options[0].format || undefined;
    }
  }

  configTopViews() {
    let topChannelViewed: string | null = localStorage.getItem('APP_TVPLAYER_TOP');
    if (topChannelViewed) {
      this.topList = JSON.parse(topChannelViewed) as { channel: TdtChannelDto, views: number } [];
    } else {
      this.topList = [];
      this.doUpdateChannelsViews();
    }
  }

  parsedDate(dateNumber: number): Date {
    return new Date(dateNumber * 1000);
  }

  getCurrentEpgEventIndex(): number {
    const now = new Date();
    const currentIndex = this.currentEpg?.events.findIndex((_epg) => {
      return this.parsedDate(_epg.hi).getTime()<=now.getTime() && this.parsedDate(_epg.hf).getTime()>=now.getTime()
    });
    return currentIndex || 0;
  }

  ngOnInit(): void {

    // console.log(this.route.snapshot.paramMap);

    this.isLocalhost = window.location.hostname === 'localhost';

    this.isMobile = this.deviceDetector.isMobile();
    this.isTablet = screen.width>=321 && screen.width<=768;
    this.isWindows = this.deviceDetector.os === 'Windows';
    this.isMac = this.deviceDetector.os === 'Mac';
    this.isIOS = this.deviceDetector.os === 'iOS';
    this.isAndroid = this.deviceDetector.os === 'Android';
    this.portrait = this.deviceDetector.orientation === 'portrait';
    this.landscape = this.deviceDetector.orientation === 'lanscape';

    /*
    console.group('Device specifications:');
    console.log('OS', this.deviceDetector.os);
    console.log('Orientation', this.deviceDetector.orientation);
    console.groupEnd();
    */

    if (!this.isMobile || this.isTablet) {
      this.historyLength = 6;
      this.topListLength = 6;
    }

    this.gridViewType = GridViewTypeEnum.LAST;

    // Youtube API load
    if(!this.youtubeApiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.youtubeApiLoaded = true;
    }

    this.loadCEpgsSubscription = this.streamService.getEpg().subscribe({
      next: (_epgs) => {
        this.epgs = _epgs;

        this.loadChannelsSubscription = this.streamService.streams$.subscribe((_channels) => {
          this.channels = _channels;

          this.setupChannels();
          this.setupCountries();

          // Content types
          this.contentTypes = Object.values(ContentTypesEnum).map((_key) => _key  ).sort();

          // History
          this.configHistory();

          // Top views
          this.configTopViews();

          // Init forms
          this.initForms();  
        });
      },
      error: () => {
        this.epgs = [];
      }
    });

    

    this.routeQueryParamsSubscription = this.route.queryParams
      .subscribe(params => {
        console.log('params', params);
        this.backoffice = params && params['backoffice']==='true' && !this.isMobile;
      }
    );

  }

  ngOnDestroy(): void {
    if (this.loadChannelsSubscription) this.loadChannelsSubscription.unsubscribe();
    if (this.routeQueryParamsSubscription) this.routeQueryParamsSubscription.unsubscribe();
    if (this.loadCEpgsSubscription) this.loadCEpgsSubscription.unsubscribe();
  }

}