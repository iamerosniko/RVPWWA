import { Component, OnInit,Input,Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit, PipeTransform {

  constructor(private sanitizer:DomSanitizer) { }
  @Input() srcString : string;
  
  ngOnInit() {
  }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  URL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.srcString);
  }
}
