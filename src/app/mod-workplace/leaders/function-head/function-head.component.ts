import { Component, OnInit } from '@angular/core';
import { StaticResources } from '../../../com_entities/static-resources';
@Component({
  selector: 'app-function-head',
  templateUrl: './function-head.component.html',
  styleUrls: ['./function-head.component.css']
})
export class FunctionHeadComponent implements OnInit {

  constructor() { }

  breadcrumbs =['Leaders\' Video' ,'Function Head'];
  path:string = StaticResources.FUNCTIONHEADURL;
  
  ngOnInit() {
  }

}
