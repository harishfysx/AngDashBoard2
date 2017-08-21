import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LandingComponent} from './landing.component';
import {LandingRoutingModule} from './landing.routing.module';
import { SearchComponent } from './search/search.component';
import {MaterialModule} from '@angular/material';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAU9f7luK3J31nurL-Io3taRKF7w9BItQE'
    }),
    LandingRoutingModule
  ],
  declarations: [LandingComponent, SearchComponent]
})
export class LandingModule { }
