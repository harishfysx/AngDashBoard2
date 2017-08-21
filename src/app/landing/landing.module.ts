import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LandingComponent} from './landing.component';
import {LandingRoutingModule} from './landing.routing.module';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule
  ],
  declarations: [LandingComponent, SearchComponent]
})
export class LandingModule { }
