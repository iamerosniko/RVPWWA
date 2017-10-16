import { Component, OnInit } from '@angular/core';
import { StaticResources } from '../../../com_entities/static-resources';

@Component({
  selector: 'app-vacation-leave',
  templateUrl: './vacation-leave.component.html',
  styleUrls: ['./vacation-leave.component.css']
})
export class VacationLeaveComponent implements OnInit {

  constructor() { }

  breadcrumbs =['Policies' ,'Vacation Leave'];
  path:string=StaticResources.VACATIONLEAVE;
  ngOnInit() {
  }

}
