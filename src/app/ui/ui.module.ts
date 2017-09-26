import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { HorizontalNavbarComponent } from './components/horizontal-navbar/horizontal-navbar.component';
import {VerticalNavbarComponent} from './components/vertical-navbar/vertical-navbar.component';
import {LogoComponent} from './components/logo/logo.component';
import {FooterComponent} from './components/footer/footer.component';
import {AdditionNavbarComponent} from './components/addition-navbar/addition-navbar.component';
import {MenuComponent} from './components/menu/menu.component';
import { MatProgressBarModule } from '@angular/material';
@NgModule({
  declarations: [
    HorizontalNavbarComponent,
    VerticalNavbarComponent,
    LogoComponent,
    FooterComponent,
    AdditionNavbarComponent,
    MenuComponent

  ],
  exports: [
    HorizontalNavbarComponent,
    VerticalNavbarComponent,
    LogoComponent,
    FooterComponent,
    AdditionNavbarComponent,
    MenuComponent
  ],
  imports: [
    HttpModule,
    CommonModule,
    RouterModule,
    MatProgressBarModule
  ]
})
export class UiModule { }
