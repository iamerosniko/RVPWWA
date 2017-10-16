import { Component, OnInit } from '@angular/core';
import { StaticResources } from '../../../com_entities/static-resources';

@Component({
  selector: 'app-house-rules',
  templateUrl: './house-rules.component.html',
  styleUrls: ['./house-rules.component.css']
})
export class HouseRulesComponent implements OnInit {

  constructor() { }

  breadcrumbs =['Policies' ,'House Rules'];

  path:string=StaticResources.HOUSERULES;

  ngOnInit() {
  }

}
