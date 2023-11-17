import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StreamService {

  // https://www.tdtchannels.com/lists/tv.json

  constructor(
    private http: HttpClient
  ) { }

  getStreams(): Observable<{ name: string, url: string }[]> {
    // return this.http.get<any>('https://www.tdtchannels.com/lists/tv.json');

    return of([
      /*
      { name: 'Akamaized', url: 'https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8' },
      { name: 'Skate phantom', url: 'http://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8' },
      { name: 'Wowzaid', url: 'http://playertest.longtailvideo.com/adaptive/wowzaid3/playlist.m3u8' },
      */
      { name: 'La 1', url: 'https://ztnr.rtve.es/ztnr/1688877.m3u8' },
      { name: 'La 2', url: 'https://rtvelivestream.akamaized.net/rtvesec/la2/la2_main_dvr.m3u8' },
      { name: 'TV3', url: 'https://directes-tv-cat.ccma.cat/live-origin/tv3-hls/master.m3u8' },
      { name: '3/24', url: 'https://directes-tv-int.ccma.cat/live-origin/canal324-hls/master.m3u8' },
      { name: '33', url: 'https://directes-tv-cat.ccma.cat/live-origin/c33-super3-hls/master.m3u8' },
      { name: 'TRECE', url: 'https://play.cdn.enetres.net/091DB7AFBD77442B9BA2F141DCC182F5021/live.smil/playlist.m3u8' },
      { name: 'El Toro TV', url: 'https://streaming-1.eltorotv.com/lb0/eltorotv-streaming-web/index.m3u8' },
      { name: 'Sky News UK', url: 'https://linear021-gb-hls1-prd-ak.cdn.skycdp.com/Content/HLS_001_sd/Live/channel(skynews)/index_hd.m3u8' },
      { name: 'Canal 24H', url: 'https://ztnr.rtve.es/ztnr/1694255.m3u8' },
      { name: 'Esport 3', url: 'https://directes-tv-cat.ccma.cat/live-origin/esport3-hls/master.m3u8' },
      { name: 'Televisió de Girona', url: 'http://ventdelnord.tv:8080/girona/directe.m3u8' },
      { name: 'Canal Blau', url: 'https://liveingesta318.cdnmedia.tv/blautvlive/smil:live.smil/playlist.m3u8' },
      { name: 'Canal Sur Andalucía', url: 'https://cdnlive.codev8.net/rtvalive/smil:channel1.smil/playlist.m3u8' },
      { name: 'Mola TV', url: 'http://ventdelnord.tv:8080/mola/directe.m3u8' },
    ]);
  }

}
