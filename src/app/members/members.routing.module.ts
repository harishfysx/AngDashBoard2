import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StateSearchComponent} from './state-search/state-search.component';
import {MembersComponent} from './members.component';
import {StateAnalyticsComponent} from './state-analytics/state-analytics.component';
import {WidgetsComponent} from './widgets/widgets.component';


const routes: Routes = [
  {
      path: '', component: MembersComponent,   children: [
    { path: 'state', component: StateSearchComponent },
    { path: 'state-analytics', component: StateAnalyticsComponent },
    { path: 'widgets', component: WidgetsComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MembersRoutingModule {}
