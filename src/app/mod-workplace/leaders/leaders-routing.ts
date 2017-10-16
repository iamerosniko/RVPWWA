import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamLeaderComponent } from './team-leader/team-leader.component';
import { FunctionHeadComponent } from './function-head/function-head.component';
import { ManagerComponent } from './manager/manager.component';
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
            { path:'function-head', component: FunctionHeadComponent },
            { path:'manager', component: ManagerComponent },
            { path:'team-leader', component: TeamLeaderComponent },
        ]
    }
    
];

@NgModule ({
    imports:[ RouterModule.forChild(routes) ],
    exports:[ RouterModule ]
})

export class LeadersRouting {
}

