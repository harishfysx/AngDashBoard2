import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';



const appRoutes: Routes = [
  {path: '', redirectTo: '/landing/search', pathMatch: 'full'},
  {path: 'members', loadChildren: './members/members.module#MembersModule'},
  {path: 'landing', loadChildren: './landing/landing.module#LandingModule'}
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
