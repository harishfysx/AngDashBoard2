import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';



const appRoutes: Routes = [
  {path: '', redirectTo: '/members', pathMatch: 'full'},
  {
    path: 'members',
    loadChildren: './members/members.module#MembersModule'
  }
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
