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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild(VgHlsDirective) vgHls!: VgHlsDirective;

  supportedFormats: string[] = ['m3u8', 'mp3'];
  MediaTypesEnum = MediaTypesEnum;
  currentFormat?: MediaTypesEnum;

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
  streamUrl?: string;
  streamUrl$ = new BehaviorSubject<string>('');
  channels: TdtChannelDto [] = [];
  channelsFiltered: TdtChannelDto [] = [];

  streamForm!: FormGroup;

  countries: { name: string, iso2: string }[] = [];

  history: string[] = [];

  constructor(
    private streamService: StreamService,
    private deviceDetector: DeviceDetectorService
  ) {
    this.streamUrl$.subscribe((url) => {
      console.log(url);
      this.currentFormat = undefined;
      this.streamUrl = undefined;
      if (url && url.length>0) {
        
        if (url.indexOf(MediaTypesEnum.M3U8)>=0) {
          this.streamUrl = url;
          this.currentFormat = MediaTypesEnum.M3U8;
        } else if (url.indexOf(MediaTypesEnum.MP3)>=0) {
          setTimeout(() => {
            this.streamUrl = url;
            this.currentFormat = MediaTypesEnum.MP3;
          }, 1000);
        } else {
          this.streamUrl = url;
          this.currentFormat = undefined;
        }
      } else {
        this.streamUrl = undefined;
      }
    });
  }

  doUpdateStreamUrl(channelName: string) {
    const channel: TdtChannelDto | undefined = this.channels.find((_channel) => _channel.name===channelName );
    this.streamUrl$.next((channel?.options && channel?.options.length>0 && channel?.options[0].url) ? channel?.options[0].url : '');
    // this.streamUrl = (channel?.options && channel?.options.length>0 && channel?.options[0].url) ? channel?.options[0].url : '';
    console.log(channel);
    if (channel?.epg_id) {
      this.history = this.history.filter((_id) => _id!==channel.epg_id);
      this.history.unshift(channel.epg_id);
      this.history = this.history.slice(0,5);
      this.updateHistory(this.history);
    }
  }

  selectChannelFromHistory(channelId: string) {
    const channel: TdtChannelDto | undefined = this.getChannel(channelId);
    this.streamUrl$.next((channel?.options && channel?.options.length>0 && channel?.options[0].url) ? channel?.options[0].url : '');
    // this.streamUrl = (channel?.options && channel?.options.length>0 && channel?.options[0].url) ? channel?.options[0].url : '';
    if (channel?.epg_id) {
      this.history = this.history.filter((_id) => _id!==channelId);
      this.history.unshift(channel.epg_id);
      this.history = this.history.slice(0,5);
      this.updateHistory(this.history);
      //this.streamForm.patchValue({'country': ''});
      //this.streamForm.patchValue({'channel': channel.name});
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
    console.log(this.streamForm.get('country')?.value);
    if (this.streamForm.get('country')?.value.length===0) {
      this.channelsFiltered = [...this.channels];
    } else {
      this.channelsFiltered = [...this.channels.filter((_channel) => _channel.country===this.streamForm.get('country')?.value )]
    }
    if (!selectedChannel) {
      this.streamForm.patchValue({'channel': undefined});
    } else {
      this.streamForm.patchValue({'country': selectedChannel.country});
      this.streamForm.patchValue({'channel': selectedChannel.name});
      // this.streamUrl = selectedChannel.options[0].url;
      this.streamUrl$.next(selectedChannel.options[0].url);
    }
    
    
  }

  recoverHistory() {
    const strHistory: string | null = localStorage.getItem('APP_TVPLAYER_HISTORY');
    if (strHistory!=null && strHistory.length>0) {
      this.history = JSON.parse(strHistory);
    } else {
      this.history = [];
    }
  }

  updateHistory(history: string[]) {
    localStorage.setItem('APP_TVPLAYER_HISTORY', JSON.stringify(history))
  }

  getChannel(channelId: string): TdtChannelDto | undefined {
    return this.channels.find((_channel) => _channel.epg_id===channelId);
  }

  ngOnInit(): void {

    this.isMobile = this.deviceDetector.isMobile();
    this.isTablet = this.deviceDetector.isTablet();
    // this.orientation = this.deviceDetector.orientation;
    this.isWindows = this.deviceDetector.os === 'Windows';
    this.isMac = this.deviceDetector.os === 'Mac';
    this.isIOS = this.deviceDetector.os === 'iOS';
    this.isAndroid = this.deviceDetector.os === 'Android';
    this.portrait = this.deviceDetector.orientation === 'portrait';
    this.landscape = this.deviceDetector.orientation === 'lanscape';

    console.log(this.deviceDetector.os);
    console.log(this.deviceDetector.orientation);

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

      this.channels = this.channels.concat(OTHER_CHANNELS_LIST);

      this.channels.forEach((_channel) => {
        if (_channel.country && _channel.country?.length>0 && !this.countries.find((_c) => _c.iso2===_channel.country )) {
          this.countries.push({
            iso2: _channel.country,
            name: this.getCountryName(_channel.country)
          });
        }
      });

      this.countries.sort((a,b) => a.name<=b.name ? -1 : 1 );
      this.countries.unshift({ name: 'Tots els països', iso2: '' });

      this.channels.sort((a,b) => {
        return a.name<b.name ? -1 : 1;
      });

      this.channelsFiltered = [...this.channels];

      console.log('channels', this.channels);

      // History
      this.recoverHistory();
      let channelName: string;

      if (this.history.length>0) {
        const lasChannelViewed: TdtChannelDto | undefined = this.getChannel(this.history[0]);
        // this.streamUrl = lasChannelViewed ? lasChannelViewed.options[0].url : this.streamUrl = this.channels[0].options[0].url;
        this.streamUrl$.next(lasChannelViewed ? lasChannelViewed.options[0].url : this.streamUrl = this.channels[0].options[0].url);
        channelName = (lasChannelViewed) ? lasChannelViewed.name : this.channels[0].name;
      } else {
        // this.streamUrl = this.channels[0].options[0].url;
        this.streamUrl$.next(this.channels[0].options[0].url);
        channelName = this.channels[0].name;
      }

      // Init forms

      this.streamForm = new FormGroup({
        channel: new FormControl(channelName),
        country: new FormControl('')
      });
      
    });    
  }
}