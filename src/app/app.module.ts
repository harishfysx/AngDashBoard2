import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app.routing.module';
import {MembersModule} from './members/members.module';
import {UiModule} from './ui/ui.module';
import {NiComponentsModule} from './ni-components/ni-components.module';
import {SharedService} from './members/shared-service';
import {LandingModule} from './landing/landing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MembersModule,
    LandingModule,
    UiModule,
    BrowserAnimationsModule,
    NiComponentsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
