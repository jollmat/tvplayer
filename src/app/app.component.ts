import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StreamService } from './services/stream.service';
import { TdtChannelDto } from './model/dto/tdt-channel-dto.interface';
import { DeviceDetectorService } from 'ngx-device-detector';
import { OTHER_CHANNELS_LIST } from 'src/assets/data/other-channels-list';
import { VgHlsDirective } from '@videogular/ngx-videogular/streaming';
import { COUNTRIES } from 'src/assets/data/countries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild(VgHlsDirective) vgHls!: VgHlsDirective;

  isMobile!: boolean;
  isTablet!: boolean;
  isWindows!: boolean;
  isMac!: boolean;
  isIOS!: boolean;
  isAndroid!: boolean;
  orientation!: string;
  
  title = 'tvplayer';
  
  // Streaming
  headers: any = {};
  hlsBitrates: any;
  streamUrl!: string;
  channels: TdtChannelDto [] = [];
  channelsFiltered: TdtChannelDto [] = [];

  streamForm!: FormGroup;

  countries: { name: string, iso2: string }[] = [];

  constructor(
    private streamService: StreamService,
    private deviceDetector: DeviceDetectorService
  ) {}

  doUpdateStreamUrl(channelName: string) {
    const channel: TdtChannelDto | undefined = this.channels.find((_channel) => _channel.name===channelName );
    this.streamUrl = (channel?.options && channel?.options.length>0 && channel?.options[0].url) ? channel?.options[0].url : '';
  }

  getCountryName(iso2: string) {
    let countryName: string = '';
    const country = (COUNTRIES as {cca2: string, name: { common: string }}[]).find((_country) => {
      return _country.cca2.toLowerCase() === iso2.toLowerCase();
    });
    return country ? country.name.common : countryName;
  }

  doFilterByCountry() {
    console.log(this.streamForm.get('country')?.value);
    if (this.streamForm.get('country')?.value.length===0) {
      this.channelsFiltered = [...this.channels];
    } else {
      this.channelsFiltered = [...this.channels.filter((_channel) => _channel.country===this.streamForm.get('country')?.value )]
    }
    this.streamForm.patchValue({'channel': this.channelsFiltered[0].name});
    this.streamUrl = this.channelsFiltered[0].options[0].url;
  }

  ngOnInit(): void {

    this.isMobile = this.deviceDetector.isMobile();
    this.isTablet = this.deviceDetector.isTablet();
    this.orientation = this.deviceDetector.orientation;
    this.isWindows = this.deviceDetector.os === 'Windows';
    this.isMac = this.deviceDetector.os === 'Mac';
    this.isIOS = this.deviceDetector.os === 'iOS';
    this.isAndroid = this.deviceDetector.os === 'Android';
    console.log(this.deviceDetector.os);

    this.streamService.getStreams().subscribe((_streamResponse) => {
      this.channels = []

      _streamResponse.countries.forEach((_country) => {
        _country.ambits.forEach((_ambit) => {
          _ambit.channels.forEach((_channel) => {
            _channel.country = _country.name === 'Spain' ? 'es' : _channel.country;
            if (_channel.options) {
              const streamingOptionIndex: number = _channel.options.findIndex((_option) => _option.format==='m3u8');
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

      // Init forms

      this.streamForm = new FormGroup({
        channel: new FormControl(this.channels[0].name),
        country: new FormControl('')
      });

      this.streamUrl = this.channels[0].options[0].url;
    });    
  }
}