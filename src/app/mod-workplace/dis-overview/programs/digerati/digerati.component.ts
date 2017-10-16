import { Component, OnInit } from '@angular/core';
import { StaticResources } from '../../../../com_entities/static-resources';

@Component({
  selector: 'app-digerati',
  templateUrl: './digerati.component.html',
  styleUrls: ['./digerati.component.css']
})
export class DigeratiComponent implements OnInit {

  constructor() { }

  breadcrumbs =['DIS Overview','Programs'  ,'Digerati'];
  slides:any;

  ngOnInit() {
    this.slides=StaticResources.DIGERATI();
  }

}
