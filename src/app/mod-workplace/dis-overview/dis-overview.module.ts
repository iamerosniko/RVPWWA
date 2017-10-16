import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrgChartComponent } from './org-chart/org-chart.component';
import { MissionVisionComponent } from './mission-vision/mission-vision.component';
import { FunctionalTowersComponent } from './functional-towers/functional-towers.component';
import { StrategiesComponent } from './strategies/strategies.component';
import { DisOverviewRouting } from './dis-overview-routing';
import { AspireComponent } from './programs/aspire/aspire.component';
import { CaresComponent } from './programs/cares/cares.component';
import { CareersComponent } from './programs/careers/careers.component';
import { MotivateComponent } from './programs/motivate/motivate.component';
import { DigeratiComponent } from './programs/digerati/digerati.component';
import { ModCommonModule } from '../../mod-common/mod-common.module';
// import { ProgramsModule } from './programs/programs.module';
@NgModule({
  imports: [
    CommonModule,ModCommonModule,DisOverviewRouting,//ProgramsModule
  ],
  declarations: [OrgChartComponent, MissionVisionComponent, FunctionalTowersComponent, StrategiesComponent,
    AspireComponent, CaresComponent, CareersComponent, MotivateComponent, DigeratiComponent],
})
export class DisOverviewModule { }
