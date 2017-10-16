import { Component, OnInit } from '@angular/core';
import { Resource } from '../../../com_entities/workplace-entities';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  breadcrumbs =['Team Overview' ,'Services'];
  slides:any[]=[];
  ngOnInit() {
    var resource:Resource[]=<Resource[]>JSON.parse(sessionStorage.getItem('workplace_team-resources'));
    var apps:Resource[]=resource.filter(x=>x.ResourceCategory=='Team Services');

    for(var i=0;i<apps.length;i++){
      this.slides.push({ image : apps[i].ResourcePath });
    }
  }

}
