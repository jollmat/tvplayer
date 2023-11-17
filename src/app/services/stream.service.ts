import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TdtChannelsDto } from '../model/dto/tdt-channels-response-dto.interface';
import { TDT_CHANNELS } from 'src/assets/data/tdt-channels-list';

@Injectable({
  providedIn: 'root'
})
export class StreamService {

  // https://www.tdtchannels.com/lists/tv.json

  constructor(
    private http: HttpClient
  ) { }

  getStreams(): Observable<TdtChannelsDto> {
    // return this.http.get<TdtChannelsDto>('https://www.tdtchannels.com/lists/tv.json');
    return of(TDT_CHANNELS);
  }

}
