import { Component, OnInit } from '@angular/core';
import { Resource } from '../../../com_entities/workplace-entities';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-org',
  templateUrl: './org.component.html',
  styleUrls: ['./org.component.css']
})
export class OrgComponent implements OnInit {

  constructor(public sanitizer: DomSanitizer) { }

  path:string ='';
  breadcrumbs =['Team Overview' ,'Team Org Chart'];
  ngOnInit() {
    var resource:Resource[]=<Resource[]>JSON.parse(sessionStorage.getItem('workplace_team-resources'));
    var apps:Resource=resource.find(x=>x.ResourceCategory=='Team Org');

    this.path=(apps==null)?'':apps.ResourcePath;
  }

}
