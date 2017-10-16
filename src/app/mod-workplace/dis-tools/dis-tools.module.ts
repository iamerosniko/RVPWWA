import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptComponent } from './opt/opt.component';
import { KhronosComponent } from './khronos/khronos.component';
import { ContactNumbersComponent } from './contact-numbers/contact-numbers.component';
import { WorkdayComponent } from './workday/workday.component';
import { DisToolsRouting } from './dis-tools-routing';
import { ModCommonModule } from '../../mod-common/mod-common.module';
@NgModule({
  imports: [
    CommonModule,DisToolsRouting,ModCommonModule
  ],
  declarations: [OptComponent, KhronosComponent, ContactNumbersComponent, WorkdayComponent]
})
export class DisToolsModule { }
