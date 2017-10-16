import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteActivatorService } from '../../com_services/route_activator.service';
import { OptComponent } from './opt/opt.component';
import { KhronosComponent } from './khronos/khronos.component';
import { ContactNumbersComponent } from './contact-numbers/contact-numbers.component';
import { WorkdayComponent } from './workday/workday.component';
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
            { path:'opt', component: OptComponent },
            { path:'khronos', component: KhronosComponent },
            { path:'contacts', component: ContactNumbersComponent },
            { path:'workday', component: WorkdayComponent },
        ]
    }
    
];

@NgModule ({
    imports:[ RouterModule.forChild(routes) ],
    exports:[ RouterModule ]
})

export class DisToolsRouting {
}

