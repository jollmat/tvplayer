import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StreamService } from './services/stream.service';
import { TdtChannelDto } from './model/dto/tdt-channel-dto.interface';
import { DeviceDetectorService } from 'ngx-device-detector';
import { OTHER_CHANNELS_LIST } from 'src/assets/data/other-channels-list';
import { VgHlsDirective } from '@videogular/ngx-videogular/streaming';
import { COUNTRIES } from 'src/assets/data/countries';
import { MediaTypesEnum } from './model/enum/media-types.enum';
import { BehaviorSubject } from 'rxjs';
import { NgSelectComponent } from '@ng-select/ng-select';
import { GridViewTypeEnum } from './model/enum/grid-view-type.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild(VgHlsDirective) vgHls!: VgHlsDirective;

  @ViewChild('channelSelector') channelSelector!: NgSelectComponent;

  supportedFormats: string[] = ['m3u8', 'mp3', 'youtube'];
  MediaTypesEnum = MediaTypesEnum;
  currentFormat?: MediaTypesEnum;
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
  streamUrl?: string;
  streamUrl$ = new BehaviorSubject<string>('');
  channels: TdtChannelDto [] = [];
  channelsFiltered: TdtChannelDto [] = [];

  private youtubeApiLoaded = false;
  youtubeVideoId?: string;

  streamForm!: FormGroup;

  countries: { name: string, iso2: string, numChannels: number }[] = [];

  gridViewForm!: FormGroup;
  gridViewType: GridViewTypeEnum = GridViewTypeEnum.LAST;
  gridViewTypesFormValues: { text: string, value: GridViewTypeEnum} [] = [
    { text: 'History', value: GridViewTypeEnum.LAST },
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
    private deviceDetector: DeviceDetectorService
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
          this.youtubeVideoId = this.getYoutubeId(url);
          this.currentFormat = MediaTypesEnum.YOUTUBE;
        } else {
          this.streamUrl = url;
          this.currentFormat = undefined;
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
      return undefined;
    }
  }

  getYoutubeId(url: string): string {
    return url.substring(url.indexOf('v=')).replace('v=', '');
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
    console.log('doCountChannelView()', channel);
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

  doUpdateStreamUrl(channelName: string) {
    const channel: TdtChannelDto | undefined = this.channels.find((_channel) => _channel.name===channelName );
    this.streamUrl$.next((channel?.options && channel?.options.length>0 && channel?.options[0].url) ? channel?.options[0].url : '');
    this.logoUrl = channel?.logo;
    if (channel?.epg_id) {
      this.history = this.history.filter((_channel) => _channel.epg_id!==channel.epg_id);
      this.history.unshift(channel);
      this.updateHistory(this.history);
      this.doCountChannelView(channel);
    }
  }

  selectChannelFromHistory(channel: TdtChannelDto) {
    this.streamUrl$.next((channel?.options && channel?.options.length>0 && channel?.options[0].url) ? channel?.options[0].url : '');
    this.logoUrl = channel.logo;
    console.log(channel, this.logoUrl);
    if (channel?.epg_id) {
      this.history = this.history.filter((_channel) => _channel.epg_id!==channel.epg_id);
      this.history.unshift(channel);
      this.history = this.history.slice(0,this.historyLength);
      this.updateHistory(this.history);
      this.doFilterByCountry(channel);
    }
  }

  getCountryName(iso2: string) {
    let countryName: string = '';
    const country = (COUNTRIES as {cca2: string, name: { common: string }}[]).find((_country) => {
      return _country.cca2.toLowerCase() === iso2.toLowerCase();
    });
    return country ? country.name.common : countryName;
  }

  doFilterByCountry(selectedChannel?: TdtChannelDto) {
    if (!this.streamForm.get('country')?.value || this.streamForm.get('country')?.value.length===0) {
      this.channelsFiltered = [...this.channels];
    } else {
      this.channelsFiltered = [...this.channels.filter((_channel) => _channel.country===this.streamForm.get('country')?.value )];
      if (!selectedChannel) {
        //this.channelSelector.open();
      }
    }
    if (!selectedChannel) {
      this.streamForm.patchValue({'channel': undefined});
    } else {
      this.streamForm.patchValue({'country': selectedChannel.country});
      this.streamForm.patchValue({'channel': selectedChannel.name});
      this.streamUrl$.next(selectedChannel.options[0].url);
    }
  }

  recoverHistory() {
    let strHistory: string | null = localStorage.getItem('APP_TVPLAYER_HISTORY');

    if (strHistory!=null && strHistory.length>0) {
      if ((JSON.parse(strHistory) as any[]).length>0 && typeof (JSON.parse(strHistory) as any[])[0] === 'string') {
        strHistory = '[]';
        this.updateHistory([]);
      }
      this.history = JSON.parse(strHistory);
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

  ngOnInit(): void {

    this.isLocalhost = window.location.hostname === 'localhost';

    this.isMobile = this.deviceDetector.isMobile();
    this.isTablet = this.deviceDetector.isTablet();
    this.isWindows = this.deviceDetector.os === 'Windows';
    this.isMac = this.deviceDetector.os === 'Mac';
    this.isIOS = this.deviceDetector.os === 'iOS';
    this.isAndroid = this.deviceDetector.os === 'Android';
    this.portrait = this.deviceDetector.orientation === 'portrait';
    this.landscape = this.deviceDetector.orientation === 'lanscape';

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

    // Get stream list
    this.streamService.getStreams().subscribe((_streamResponse) => {
      this.channels = []

      _streamResponse.countries.forEach((_country) => {
        _country.ambits.forEach((_ambit) => {
          _ambit.channels.forEach((_channel) => {
            _channel.country = _country.name === 'Spain' ? 'es' : _channel.country;
            if (!_channel.epg_id || _channel.epg_id.trim().length===0) {
              _channel.epg_id = _channel.name.trim().replace(/\s/g, '_') + '.' + _channel.country;
            }
            if (_channel.options) {
              const streamingOptionIndex: number = _channel.options.findIndex((_option) => this.supportedFormats.includes(_option.format));
              if (streamingOptionIndex>=0) {
                _channel.options = [_channel.options[streamingOptionIndex]];
                this.channels.push(_channel);
              }
            }
          });
        });
      });

      let otherChannels: TdtChannelDto[] = OTHER_CHANNELS_LIST;
      otherChannels = otherChannels.map((_channel) => {
        if ((!_channel.epg_id || _channel.epg_id.trim().length===0) && _channel.options && _channel.options.length>0) {
          _channel.epg_id = _channel.name.replace(/\s/g, '_') + '.' + (_channel.country && _channel.country.length>0 ? _channel.country : _channel.options[0].format);
        }
        return _channel;
      });

      this.channels = this.channels.concat(otherChannels);

      this.channels.forEach((_channel) => {

        // Set no image
        if (!_channel.logo || _channel.logo.length===0) {
          _channel.logo = './assets/img/img-not-found.jpg';
        }

        // Get countries
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

      this.channels.sort((a,b) => {
        return a.name<b.name ? -1 : 1;
      });

      this.channelsFiltered = [...this.channels];

      console.log('countries', this.countries);
      console.log('channels', this.channels);

      // History
      this.recoverHistory();
      let channelName: string;

      if (this.history.length>0) {
        const lasChannelViewed: TdtChannelDto | undefined = this.history[0];
        // this.streamUrl = lasChannelViewed ? lasChannelViewed.options[0].url : this.streamUrl = this.channels[0].options[0].url;
        this.streamUrl$.next(lasChannelViewed ? lasChannelViewed.options[0].url : this.streamUrl = this.channels[0].options[0].url);
        this.logoUrl = (lasChannelViewed) ? lasChannelViewed.logo : undefined;
        channelName = (lasChannelViewed) ? lasChannelViewed.name : this.channels[0].name;
      } else {
        // this.streamUrl = this.channels[0].options[0].url;
        this.logoUrl = this.channels[0].logo;
        this.streamUrl$.next(this.channels[0].options[0].url);
        channelName = this.channels[0].name;
      }

      // Top views
      let topChannelViewed: string | null = localStorage.getItem('APP_TVPLAYER_TOP');
      if (topChannelViewed) {
        this.topList = JSON.parse(topChannelViewed) as { channel: TdtChannelDto, views: number } [];
      } else {
        this.topList = [];
        this.doUpdateChannelsViews();
      }

      // Init forms

      this.streamForm = new FormGroup({
        channel: new FormControl(channelName),
        country: new FormControl('')
      });

      this.gridViewForm = new FormGroup({
        gridViewType: new FormControl(this.gridViewType)
      });
      
    });    
  }
}