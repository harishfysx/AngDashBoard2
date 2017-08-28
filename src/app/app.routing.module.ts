import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';



const appRoutes: Routes = [
  {path: '', redirectTo: '/landing', pathMatch: 'full'},
  {path: 'landing', loadChildren: './landing/landing.module#LandingModule'},
  {path: 'members', loadChildren: './members/members.module#MembersModule'}
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
