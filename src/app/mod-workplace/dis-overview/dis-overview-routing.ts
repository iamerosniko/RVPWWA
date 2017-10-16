import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteActivatorService } from '../../com_services/route_activator.service';
import { OrgChartComponent } from './org-chart/org-chart.component';
import { MissionVisionComponent } from './mission-vision/mission-vision.component';
import { FunctionalTowersComponent } from './functional-towers/functional-towers.component';
import { StrategiesComponent } from './strategies/strategies.component';

import { AspireComponent } from './programs/aspire/aspire.component';
import { CaresComponent } from './programs/cares/cares.component';
import { CareersComponent } from './programs/careers/careers.component';
import { MotivateComponent } from './programs/motivate/motivate.component';
import { DigeratiComponent } from './programs/digerati/digerati.component';
import { WorkplaceComponent } from '../workplace.component';
const routes: Routes = [
    // { path: 'title', component: TitleComponent,
    //         resolve: {titles: TitlesResolverService} },
    // // use a service that is define in the provider
    // { path: 'title/:id', component: TitleDetailsComponent,
    //         canActivate: [RouteActivatorService]}
    { 
        path : 'workplace' , component:WorkplaceComponent ,
        children : [
            { path: '', redirectTo: 'mission-vision', pathMatch: 'full' },
            { path:'mission-vision', component: MissionVisionComponent },
            { path:'org-chart', component: OrgChartComponent },
            { path:'strategies', component: StrategiesComponent },
            { path:'functional-towers', component: FunctionalTowersComponent },
            { path:'aspire', component: AspireComponent },
            { path:'cares', component: CaresComponent },
            { path:'careers', component: CareersComponent },
            { path:'motivate', component: MotivateComponent },
            { path:'digerati', component: DigeratiComponent },
        ]
    }
    
];

@NgModule ({
    imports:[ RouterModule.forChild(routes) ],
    exports:[ RouterModule ]
})

export class DisOverviewRouting {
}

