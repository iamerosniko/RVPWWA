import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeadersComponent } from './leaders/leaders.component';
import { TeamsComponent } from './teams/teams.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [
    { path:'admin/leaders', component: LeadersComponent },
    { path:'admin/teams', component: TeamsComponent },
    { path:'admin/resources', component: ResourcesComponent }
];

@NgModule ({
    imports:[ RouterModule.forChild(routes) ],
    exports:[ RouterModule ]
})

export class AdminRoutingModule { }
