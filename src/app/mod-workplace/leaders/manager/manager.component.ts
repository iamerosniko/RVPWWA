import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(private sanitizer:DomSanitizer) { }

  breadcrumbs =['Leaders\' Video' ,'Manager'];
  path:string='';
  ngOnInit() {
    if(sessionStorage.getItem('workplace_manager-video')!=null){
      this.path=sessionStorage.getItem('workplace_manager-video');
    }
  }

  URL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.path);
  }

}
