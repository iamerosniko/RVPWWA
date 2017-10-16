import { Component, OnInit } from '@angular/core';
import { StaticResources } from '../../../com_entities/static-resources';
@Component({
  selector: 'app-strategies',
  templateUrl: './strategies.component.html',
  styleUrls: ['./strategies.component.css']
})
export class StrategiesComponent implements OnInit {

 constructor() { }

  breadcrumbs =['DIS Overview' ,'Strategies'];
  slides:any;

  ngOnInit() {
    this.slides=StaticResources.STRATEGIES();
  }
}
