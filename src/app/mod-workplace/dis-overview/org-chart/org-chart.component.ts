import { Component, OnInit } from '@angular/core';
import { StaticResources } from '../../../com_entities/static-resources';

@Component({
  selector: 'app-org-chart',
  templateUrl: './org-chart.component.html',
  styleUrls: ['./org-chart.component.css']
})
export class OrgChartComponent implements OnInit {

  constructor() { }
  breadcrumbs =['DIS Overview' ,'Organizational Structure'];
  slides:any;
  ngOnInit() {
    this.slides=StaticResources.ORGCHART();
  }

}
