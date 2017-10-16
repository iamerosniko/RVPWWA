import { Component, OnInit } from '@angular/core';
import { StaticResources } from '../../../../com_entities/static-resources';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

  constructor() { }

  breadcrumbs =['DIS Overview','Programs'  ,'Careers'];
  slides:any;

  ngOnInit() {
    this.slides=StaticResources.CAREERS();
  }

}
