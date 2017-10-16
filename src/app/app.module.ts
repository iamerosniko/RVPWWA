import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Ng2Datetime } from 'ng2-datetime-picker';
import { AppRoutingModule } from './app-routing.module';
import { TitleModule } from './mod_title/title.module';
import { CreateTitleModule } from './mod_create_title/create_title.module';
import { InfoModule } from './com_info/info.module';
import { WorkplaceModule } from './mod-workplace/workplace.module';
import { WelcomeModule } from './mod-welcome/welcome.module';
import { AdminModule } from './mod-admin/admin.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    TitleModule,
    CreateTitleModule,
    InfoModule,
    WorkplaceModule,
    WelcomeModule,AdminModule
    
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
