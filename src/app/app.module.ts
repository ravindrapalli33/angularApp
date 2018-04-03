import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AdminModule } from './admin/admin.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { HomeModule } from './home/home.module';
import { SettingsModule } from './settings/settings.module';
import { SharedModule } from './shared/shared.module';

import { AdminService } from './admin/services/admin.service';
import { AuthService } from './authentication/services/auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    AdminModule,
    AuthenticationModule,
    HomeModule,
    SettingsModule,
    SharedModule,
    AdminService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
