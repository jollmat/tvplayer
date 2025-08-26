import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { TdtChannelsDto } from '../model/dto/tdt-channels-response-dto.interface';
import { TDT_CHANNELS } from 'src/assets/data/tdt-channels-list';
import { TdtChannelDto } from '../model/dto/tdt-channel-dto.interface';
import { OTHER_CHANNELS_LIST } from '../../assets/data/other-channels-list';
import { TdtChannelEpgDto } from '../model/dto/tdt-channel-epg-dto.interface';

@Injectable({
  providedIn: 'root'
})
export class StreamService {

  streams$ = new BehaviorSubject<TdtChannelDto[]>([]);

  supportedFormats: string[] = ['m3u8', 'mp3', 'youtube', 'stream'];

  constructor(
    private http: HttpClient
  ) {
    this.getTdtChannels(true).subscribe((_tdtChannelsResponse) => {
      let channels: TdtChannelDto[] = [];

      // Tdt channels
      _tdtChannelsResponse.countries.forEach((_country) => {
        _country.ambits.forEach((_ambit) => {
          _ambit.channels.forEach((_channel) => {
            _channel.country = _country.name === 'Spain' ? 'es' : 'international';
            if (!_channel.epg_id || _channel.epg_id.trim().length===0) {
              _channel.epg_id = _channel.name.trim().replace(/\s/g, '_') + '.' + _channel.country;
            }
            if (_channel.options) {
              const streamingOptionIndex: number = _channel.options.findIndex((_option) => this.supportedFormats.includes(_option.format));
              if (streamingOptionIndex>=0) {
                _channel.options = [_channel.options[streamingOptionIndex]];
                channels.push(_channel);
              }
            }
          });
        });
      });

      let otherChannels: TdtChannelDto[] = this.getOtherChannels();
      otherChannels = otherChannels.map((_channel) => {
        if ((!_channel.epg_id || _channel.epg_id.trim().length===0) && _channel.options && _channel.options.length>0) {
          _channel.epg_id = _channel.name.replace(/\s/g, '_') + '.' + (_channel.country && _channel.country.length>0 ? _channel.country : _channel.options[0].format);
        }
        return _channel;
      });

      //channels = channels.concat(otherChannels);

      channels.forEach((_channel) => {
        // Set no image
        if (!_channel.logo || _channel.logo.length===0) {
          _channel.logo = './assets/img/img-not-found.jpg';
        }
        // Set logo bg
        this.setChannelLogoBg(_channel);
      });
      
      channels.sort((a,b) => {
        return a.name<b.name ? -1 : 1;
      });

      this.setStreams(channels);

    });
  }

  getYoutubeLiveVideoId(videoUrl: string): Observable<string> {
    const apiKey = 'AIzaSyD2kkschRDlOtvEMUMq1PmNbn3i9xBly-A';
    const youtubeChannelId = this.getYoutubeChannelId(videoUrl);
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${youtubeChannelId}&eventType=live&type=video&key=${apiKey}`;

    return this.http.get<any>(url).pipe(
      map(res => res.items?.length ? res.items[0].id.videoId : null)
    );
  }

  getYoutubeChannelId(url: string): string {
    if (!url) return '';
    const regExp = /youtube\.com\/channel\/([^\/?]+)/;
    const match = url.match(regExp);
    return match && match[1] ? match[1] : '';
  }

  /* Set logo img bg style depending on image luminosity */
  setChannelLogoBg(channel: TdtChannelDto) {
    channel.logoBgStyle = (channel.logoBgStyle) ? channel.logoBgStyle : 'light';
  }

  getTdtChannels(remote: boolean): Observable<TdtChannelsDto> {
    if (!remote) {
      return of(TDT_CHANNELS);
    }
    return this.http.get<TdtChannelsDto>('https://www.tdtchannels.com/lists/tv.json');
  }

  getEpg(): Observable<TdtChannelEpgDto[]> {
    return this.http.get<TdtChannelEpgDto[]>('https://www.tdtchannels.com/epg/TV.json');
  }

  getOtherChannels(): TdtChannelDto[] {
    return OTHER_CHANNELS_LIST as TdtChannelDto[];
  }

  getStreams(): Observable<TdtChannelDto[]> {
    return of(this.streams$.value);
  }

  setStreams(streams: TdtChannelDto[]) {
    this.streams$.next(streams);
  }

}
