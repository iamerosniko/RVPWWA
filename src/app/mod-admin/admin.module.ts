import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadersComponent } from './leaders/leaders.component';
import { TeamsComponent } from './teams/teams.component';
import { ResourcesComponent } from './resources/resources.component';
import { AdminRoutingModule } from './admin-routing.module';
@NgModule({
  imports: [
    CommonModule,AdminRoutingModule
  ],
  declarations: [LeadersComponent, TeamsComponent, ResourcesComponent]
})
export class AdminModule { }
