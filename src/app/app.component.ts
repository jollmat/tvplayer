import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StreamService } from './services/stream.service';
import { TdtChannelDto } from './model/dto/tdt-channel-dto.interface';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isMobile!: boolean;
  
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

      this.channels.push({
        name: 'VH1 Italia',
        logo: 'https://i.imgur.com/5ONlZGS.png',
        epg_id: 'VH1Italia.it',
        options: [
          {
            format: 'm3u8',
            url: 'https://content.uplynk.com/channel/36953f5b6546464590d2fcd954bc89cf.m3u8'
          }
        ]
      },{
        name: 'RadioItaliaTV',
        logo: 'https://i.imgur.com/4VCEJuJ.png',
        epg_id: 'RadioItaliaTV.it',
        options: [
          {
            format: 'm3u8',
            url: 'https://radioitaliatv.akamaized.net/hls/live/2093117/RadioitaliaTV/master.m3u8'
          }
        ]
      },{
        name: 'RTV Noord',
        logo: 'https://i.imgur.com/pO5Mexa.png',
        epg_id: 'RTVNoord.nl',
        options: [
          {
            format: 'm3u8',
            url: 'https://media.rtvnoord.nl/live/rtvnoord/tv/3e8fe3c1-0868-49b0-b2f3-7dd6eb30651f/index.m3u8'
          }
        ]
      },{
        name: 'Omroep Flevoland',
        logo: 'https://i.imgur.com/d1CmTcI.png',
        epg_id: 'OmroepFlevolandTV.nl',
        options: [
          {
            format: 'm3u8',
            url: 'https://d5ms27yy6exnf.cloudfront.net/live/omroepflevoland/tv/index.m3u8'
          }
        ]
      },{
        name: 'Omroep Brabant',
        logo: 'https://i.imgur.com/Jv7IjHJ.png',
        epg_id: 'OmroepBrabantTV.nl',
        options: [
          {
            format: 'm3u8',
            url: 'http://d3slqp9xhts6qb.cloudfront.net/live/omroepbrabant/tv/index.m3u8'
          }
        ]
      },{
        name: '+1',
        logo: '',
        epg_id: '',
        options: [
          {
            format: 'm3u8',
            url: 'https://cdn0-03837-liveedge0.dna.ip-only.net/03837-liveedge0/smil:03837-tx2/playlist.m3u8'
          }
        ]
      });

      this.channels.sort((a,b) => {
        return a.name<b.name ? -1 : 1;
      });

      this.streamForm = new FormGroup({
        channel: new FormControl(this.channels[0].name)
      });
      this.streamUrl = this.channels[0].options[0].url;
    });    
  }
}