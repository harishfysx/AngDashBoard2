import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LandingComponent} from './landing.component';
import {LandingRoutingModule} from './landing.routing.module';
import { SearchComponent } from './search/search.component';
import {MaterialModule} from '@angular/material';
import {AgmCoreModule} from '@agm/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {FormsModule} from '@angular/forms';
import {NiComponentsModule} from '../ni-components/ni-components.module';
import {PageSignUp1Component} from './sign-up/sign-up-1.component';
import {PageSignInComponent} from './sign-in-1/sign-in-1.component';
import {PageForgotComponent} from './forgot/forgot.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NiComponentsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAU9f7luK3J31nurL-Io3taRKF7w9BItQE'
    }),
    LandingRoutingModule
  ],
  declarations: [LandingComponent, SearchComponent, NavBarComponent, PageSignUp1Component, PageSignInComponent, PageForgotComponent]
})
export class LandingModule { }
