import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkplaceComponent } from './workplace.component';
import { WorkplaceRoutingModule } from './workplace-routing.module';
import { DisOverviewModule } from './dis-overview/dis-overview.module';
import { DisToolsModule } from './dis-tools/dis-tools.module';
import { PoliciesModule } from './policies/policies.module';
import { LeadersModule } from './leaders/leaders.module';
import { TeamOverviewModule } from './team-overview/team-overview.module';
import { ExamModule } from './exam/exam.module';
@NgModule({
  imports: [
    CommonModule,
    DisOverviewModule,
    DisToolsModule,
    PoliciesModule, 
    LeadersModule,
    TeamOverviewModule,
    ExamModule,
    WorkplaceRoutingModule
  ],
  declarations: [WorkplaceComponent]
})
export class WorkplaceModule { }
