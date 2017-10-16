import { Component, OnInit } from '@angular/core';
import { StaticResources } from '../../../com_entities/static-resources';

@Component({
  selector: 'app-info-sec',
  templateUrl: './info-sec.component.html',
  styleUrls: ['./info-sec.component.css']
})
export class InfoSecComponent implements OnInit {

  constructor() { }

  breadcrumbs =['Policies' ,'Information Security'];
  
  path:string=StaticResources.INFORMATIONSECURITY;

  ngOnInit() {
    
  }

}
