import { Component, OnInit } from '@angular/core';
import { StaticResources } from '../../../com_entities/static-resources';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {

  constructor() { }

  breadcrumbs =['Policies' ,'Privacy Policy'];
  path:string=StaticResources.PRIVACYPOLICY;
  ngOnInit() {
    
  }

}
