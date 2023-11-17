import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StreamService } from './services/stream.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'tvplayer';
  
  // Video
  videoUrl: string = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
  //url: string = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4';
  

  // Streaming
  headers: any = {};
  hlsBitrates: any;
  streamUrl!: string;
  streamUrls: {name: string, url: string} [] = []
  streamForm!: FormGroup;

  constructor(
    private streamService: StreamService
  ) {}

  doUpdateStreamUrl(event: any) {
    console.log(event);
    this.streamUrl = event;
  }

  ngOnInit(): void {
    this.streamService.getStreams().subscribe((_streams) => {
      this.streamUrls = _streams;
      this.streamUrl = this.streamUrls[0].url;
      this.streamForm = new FormGroup({
        streamUrl: new FormControl(this.streamUrl, [])
      });
    });    
  }
}
