import { Component, OnInit } from '@angular/core';
import { StaticResources } from '../../../../com_entities/static-resources';

@Component({
  selector: 'app-motivate',
  templateUrl: './motivate.component.html',
  styleUrls: ['./motivate.component.css']
})
export class MotivateComponent implements OnInit {

  constructor() { }

  breadcrumbs =['DIS Overview','Programs' ,'Motivate'];
  slides:any;

  ngOnInit() {
    this.slides=StaticResources.MOTIVATE();
  }

}
