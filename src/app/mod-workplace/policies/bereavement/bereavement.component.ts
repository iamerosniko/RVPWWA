import { Component, OnInit } from '@angular/core';
import { StaticResources } from '../../../com_entities/static-resources';

@Component({
  selector: 'app-bereavement',
  templateUrl: './bereavement.component.html',
  styleUrls: ['./bereavement.component.css']
})
export class BereavementComponent implements OnInit {

  constructor() { }

  breadcrumbs =['Policies' ,'Bereavement Policy'];
  path:string=StaticResources.BEREAVEMENTPOLICY;

  ngOnInit() {
    
  }

}
