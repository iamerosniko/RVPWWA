import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { ApiService } from '../com_services/workplace-services/api-service';
import { HttpModule } from '@angular/http';
@NgModule({
  imports: [FormsModule,HttpModule,
    CommonModule,WelcomeRoutingModule
  ],
  providers:[ApiService],
  declarations: [WelcomeComponent]
})
export class WelcomeModule { }
