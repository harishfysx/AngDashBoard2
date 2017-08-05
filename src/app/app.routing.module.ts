import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MembersComponent} from './members/members.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/members', pathMatch: 'full'},
  {path: 'members', component: MembersComponent},

]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
