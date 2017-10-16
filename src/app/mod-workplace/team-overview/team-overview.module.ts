import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppsComponent } from './apps/apps.component';
import { ServicesComponent } from './services/services.component';
import { OrgComponent } from './org/org.component';
import { TeamOverviewRouting} from './team-overview-routing';
import { ModCommonModule } from '../../mod-common/mod-common.module';
@NgModule({
  imports: [
    CommonModule,TeamOverviewRouting,ModCommonModule
  ],
  declarations: [AppsComponent, ServicesComponent, OrgComponent]
})
export class TeamOverviewModule { }
