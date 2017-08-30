import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app.routing.module';
import {MembersModule} from './members/members.module';
import {UiModule} from './ui/ui.module';
import {NiComponentsModule} from './ni-components/ni-components.module';
import {SharedService} from './members/shared-service';
import {LandingModule} from './landing/landing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {ResultService} from './shared/services/result.service';
import {AppErrorHandler} from './shared/errors/app.error.handler';
import {AuthService} from './shared/services/auth.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    MembersModule,
    LandingModule,
    UiModule,
    BrowserAnimationsModule,
    NiComponentsModule
  ],
  providers: [SharedService, ResultService, AuthService, { provide: ErrorHandler, useClass: AppErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule { }
