import { Component, OnInit } from '@angular/core';
import { StaticResources } from '../../../com_entities/static-resources';

@Component({
  selector: 'app-opt',
  templateUrl: './opt.component.html',
  styleUrls: ['./opt.component.css']
})
export class OptComponent implements OnInit {

  constructor() { }
  breadcrumbs =['DIS Tools' ,'OPT'];
  path:string=StaticResources.OPT;
  ngOnInit() {
  }

}
