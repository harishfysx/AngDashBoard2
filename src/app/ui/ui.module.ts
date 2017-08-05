import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { HorizontalNavbarComponent } from './components/horizontal-navbar/horizontal-navbar.component';

@NgModule({
  declarations: [
    HorizontalNavbarComponent

  ],
  exports: [
    HorizontalNavbarComponent
  ],
  imports: [
    HttpModule,
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class UiModule { }
