import { Component, OnInit } from '@angular/core';
import { StaticResources } from '../../../com_entities/static-resources';

@Component({
  selector: 'app-workday',
  templateUrl: './workday.component.html',
  styleUrls: ['./workday.component.css']
})
export class WorkdayComponent implements OnInit {

  constructor() { }
  breadcrumbs =['DIS Tools' ,'Workday'];
  path:string=StaticResources.WORKDAY;
  ngOnInit() {
  }

}
