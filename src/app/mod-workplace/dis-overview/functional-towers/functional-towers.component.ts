import { Component, OnInit } from '@angular/core';
import { StaticResources } from '../../../com_entities/static-resources';
@Component({
  selector: 'app-functional-towers',
  templateUrl: './functional-towers.component.html',
  styleUrls: ['./functional-towers.component.css']
})
export class FunctionalTowersComponent implements OnInit {

  constructor() { }

  breadcrumbs =['DIS Overview' ,'Functional Towers'];
  slides:any;

  ngOnInit() {
    this.slides=StaticResources.FUNCTIONALTOWERS();
  }
}
