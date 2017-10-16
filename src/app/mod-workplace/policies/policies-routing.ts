import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteActivatorService } from '../../com_services/route_activator.service';
import { PrivacyComponent } from './privacy/privacy.component';
import { InfoSecComponent } from './info-sec/info-sec.component';
import { HouseRulesComponent } from './house-rules/house-rules.component';
import { VacationLeaveComponent } from './vacation-leave/vacation-leave.component';
import { BereavementComponent } from './bereavement/bereavement.component';
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
            { path:'privacy-policy', component: PrivacyComponent },
            { path:'information-security', component: InfoSecComponent },
            { path:'house-rules', component: HouseRulesComponent },
            { path:'vacation-leave', component: VacationLeaveComponent },
            { path:'bereavement', component: BereavementComponent },
        ]
    }
    
];

@NgModule ({
    imports:[ RouterModule.forChild(routes) ],
    exports:[ RouterModule ]
})

export class PoliciesRouting {
}

