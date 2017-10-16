import { Component, OnInit } from '@angular/core';
import { StaticResources } from '../../../../com_entities/static-resources';

@Component({
  selector: 'app-cares',
  templateUrl: './cares.component.html',
  styleUrls: ['./cares.component.css']
})
export class CaresComponent implements OnInit {

  constructor() { }

  breadcrumbs =['DIS Overview','Programs'  ,'Cares'];
  slides:any;

  ngOnInit() {
    this.slides=StaticResources.CARES();
  }

}
