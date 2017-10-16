import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppsComponent } from './apps/apps.component';
import { ServicesComponent } from './services/services.component';
import { OrgComponent } from './org/org.component';
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
            { path:'team-apps', component: AppsComponent },
            { path:'team-services', component: ServicesComponent },
            { path:'team', component: OrgComponent },
        ]
    }
    
];

@NgModule ({
    imports:[ RouterModule.forChild(routes) ],
    exports:[ RouterModule ]
})

export class TeamOverviewRouting {
}

