import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from './search/search.component';
import {LandingComponent} from './landing.component';


const routes: Routes = [
  {path: '', redirectTo: '/landing/search', pathMatch: 'full'},
  {path: '', component: LandingComponent,   children: [
    { path: 'search', component: SearchComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LandingRoutingModule {}
