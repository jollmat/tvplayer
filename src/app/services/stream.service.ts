import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { TdtChannelsDto } from '../model/dto/tdt-channels-response-dto.interface';
import { TDT_CHANNELS } from 'src/assets/data/tdt-channels-list';
import { TdtChannelDto } from '../model/dto/tdt-channel-dto.interface';
import { OTHER_CHANNELS_LIST } from '../../assets/data/other-channels-list';

@Injectable({
  providedIn: 'root'
})
export class StreamService {

  streams$ = new BehaviorSubject<TdtChannelDto[]>([]);

  supportedFormats: string[] = ['m3u8', 'mp3', 'youtube', 'stream'];

  constructor(
    private http: HttpClient
  ) {
    this.getTdtChannels().subscribe((_tdtChannelsResponse) => {
      let channels: TdtChannelDto[] = [];

      // Tdt channels
      _tdtChannelsResponse.countries.forEach((_country) => {
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

      channels = channels.concat(otherChannels);

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

  /* Set logo img bg style depending on image luminosity */
  setChannelLogoBg(channel: TdtChannelDto) {
    channel.logoBgStyle = (channel.logoBgStyle) ? channel.logoBgStyle : 'light';
  }

  getTdtChannels(): Observable<TdtChannelsDto> {
    return of(TDT_CHANNELS);
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
