import { Component, Input, OnInit } from '@angular/core';
import { MediaTypesEnum } from 'src/app/model/enum/media-types.enum';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss']
})
export class MediaPlayerComponent implements OnInit {

  isMobile!: boolean;
  isTablet!: boolean;
  isWindows!: boolean;
  isMac!: boolean;
  isIOS!: boolean;
  isAndroid!: boolean;
  orientation!: string;
  portrait!: boolean;
  landscape!: boolean;

  MediaTypesEnum = MediaTypesEnum;

  youtubePlayerConfig: any = {
    controls: 1,
    mute: 1,
    autoplay: 1
  };

  @Input() format!: MediaTypesEnum;
  @Input() url!: string;
  @Input() headers: any = {};
  @Input() hlsBitrates: any;
  @Input() logo: string = './assets/img/img-not-found.jpg';
  @Input() youtubeId?: string;
  @Input() mosaic: boolean = false;

  constructor() {

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
