import { Component, OnInit } from '@angular/core';
import { StaticResources } from '../../../com_entities/static-resources';

@Component({
  selector: 'app-contact-numbers',
  templateUrl: './contact-numbers.component.html',
  styleUrls: ['./contact-numbers.component.css']
})
export class ContactNumbersComponent implements OnInit {

  constructor() { }

  breadcrumbs =['DIS Tools' ,'Contact Numbers'];
  slides:any;

  ngOnInit() {
    this.slides=StaticResources.CONTACTS();
  }

}
