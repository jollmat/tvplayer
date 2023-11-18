import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StreamService } from './services/stream.service';
import { TdtChannelDto } from './model/dto/tdt-channel-dto.interface';
import { DeviceDetectorService } from 'ngx-device-detector';
import { OTHER_CHANNELS_LIST } from 'src/assets/data/other-channels-list';
import { VgHlsDirective } from '@videogular/ngx-videogular/streaming';

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
  isIOS!: boolean;
  isAndroid!: boolean;
  orientation!: string;
  
  title = 'tvplayer';
  
  // Video
  videoUrl: string = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
  //url: string = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4';
  

  // Streaming
  headers: any = {};
  hlsBitrates: any;
  streamUrl!: string;
  channels: TdtChannelDto [] = []
  streamForm!: FormGroup;

  constructor(
    private streamService: StreamService,
    private deviceDetector: DeviceDetectorService
  ) {}

  doUpdateStreamUrl(channelName: string) {
    const channel: TdtChannelDto | undefined = this.channels.find((_channel) => _channel.name===channelName );
    this.streamUrl = (channel?.options && channel?.options.length>0 && channel?.options[0].url) ? channel?.options[0].url : '';
  }

  ngOnInit(): void {

    this.isMobile = this.deviceDetector.isMobile();
    this.isTablet = this.deviceDetector.isTablet();
    this.orientation = this.deviceDetector.orientation;
    this.isWindows = this.deviceDetector.os === 'Windows';
    this.isIOS = this.deviceDetector.os === 'iOS';
    this.isAndroid = this.deviceDetector.os === 'Android';
    console.log(this.deviceDetector.os);

    this.streamService.getStreams().subscribe((_streamResponse) => {
      this.channels = []
      console.log(_streamResponse);

      _streamResponse.countries.forEach((_country) => {
        _country.ambits.forEach((_ambit) => {
          _ambit.channels.forEach((_channel) => {
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

      /*
      ,{
        name: '+1',
        logo: '',
        epg_id: '',
        country: '',
        options: [
          {
            format: 'm3u8',
            url: ''
          }
        ]
      }
      */

      this.channels.sort((a,b) => {
        return a.name<b.name ? -1 : 1;
      });

      console.log(this.channels);

      this.streamForm = new FormGroup({
        channel: new FormControl(this.channels[0].name)
      });
      this.streamUrl = this.channels[0].options[0].url;
    });    
  }
}