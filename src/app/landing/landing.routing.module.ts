import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from './search/search.component';
import {LandingComponent} from './landing.component';
import {PageSignUp1Component} from './sign-up/sign-up-1.component';
import {PageSignInComponent} from './sign-in-1/sign-in-1.component';
import {PageForgotComponent} from './forgot/forgot.component';
import {PageConfirmComponent} from './confirm/confirm.component';


const routes: Routes = [
      {path: '', component: LandingComponent, children: [
      { path: 'search', component: SearchComponent },
      {path: 'signup', component: PageSignUp1Component},
      {path: 'signin', component: PageSignInComponent},
      {path: 'forget', component: PageForgotComponent},
      {path: 'confirm/:registeredUserEmail', component: PageConfirmComponent},
        { path: '**', component: SearchComponent }
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LandingRoutingModule {}
