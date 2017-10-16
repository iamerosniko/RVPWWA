import { Component, OnInit } from '@angular/core';
import { StaticResources } from '../../../../com_entities/static-resources';

@Component({
  selector: 'app-aspire',
  templateUrl: './aspire.component.html',
  styleUrls: ['./aspire.component.css']
})
export class AspireComponent implements OnInit {

  constructor() { }

  breadcrumbs =['DIS Overview','Programs'  ,'Aspire'];
  slides:any;

  ngOnInit() {
    this.slides=StaticResources.ASPIRE();
  }

}
