import { Component, OnInit } from '@angular/core';
import { Resource } from '../../../com_entities/workplace-entities';
@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {

  constructor() { }
  
  breadcrumbs =['Team Overview' ,'Tools and Applications'];
  slides:any[]=[];
  ngOnInit() {
    var resource:Resource[]=<Resource[]>JSON.parse(sessionStorage.getItem('workplace_team-resources'));
    var apps:Resource[]=resource.filter(x=>x.ResourceCategory=='Team Apps');

    for(var i=0;i<apps.length;i++){
      this.slides.push({ image : apps[i].ResourcePath });
    }
  }

}
