import { Component, OnInit } from '@angular/core';
import { StaticResources } from '../../../com_entities/static-resources';

@Component({
  selector: 'app-khronos',
  templateUrl: './khronos.component.html',
  styleUrls: ['./khronos.component.css']
})
export class KhronosComponent implements OnInit {

  constructor() { }
  breadcrumbs =['DIS Tools' ,'Khronos'];
  path:string=StaticResources.KHRONOS;
  ngOnInit() {
  }

}
