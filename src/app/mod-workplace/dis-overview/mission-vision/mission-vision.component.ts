import { Component, OnInit } from '@angular/core';
import { StaticResources } from '../../../com_entities/static-resources';
@Component({
  selector: 'app-mission-vision',
  templateUrl: './mission-vision.component.html',
  styleUrls: ['./mission-vision.component.css']
})
export class MissionVisionComponent implements OnInit {

  constructor() { }

  breadcrumbs =['DIS Overview' ,'Mission - Vision'];
  slides:any;

  ngOnInit() {
    this.slides=StaticResources.MISSIONVISION();
  }

}
