import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from './search/search.component';
import {LandingComponent} from './landing.component';
import {PageSignUp1Component} from './sign-up/sign-up-1.component';


const routes: Routes = [
      {path: '', component: LandingComponent, children: [
      { path: 'search', component: SearchComponent },
      {path: 'signup', component: PageSignUp1Component},
        { path: '**', component: SearchComponent }
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LandingRoutingModule {}
