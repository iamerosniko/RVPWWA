import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteActivatorService } from '../com_services/route_activator.service'
import { WorkplaceComponent } from './workplace.component';
const routes: Routes = [
    // { path: 'title', component: TitleComponent,
    //         resolve: {titles: TitlesResolverService} },
    // // use a service that is define in the provider
    // { path: 'title/:id', component: TitleDetailsComponent,
    //         canActivate: [RouteActivatorService]}
    { path:'workplace', component: WorkplaceComponent }
];

@NgModule ({
    imports:[ RouterModule.forChild(routes) ],
    exports:[ RouterModule ]
})

export class WorkplaceRoutingModule { }
