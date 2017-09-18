import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StateSearchComponent} from './state-search/state-search.component';
import {MembersComponent} from './members.component';
import {StateAnalyticsComponent} from './state-analytics/state-analytics.component';
import {WidgetsComponent} from './widgets/widgets.component';
import {CollegeSearchComponent} from './college-search/college-search.component';
import {CollegeAnalyticsComponent} from './college-analytics/college-analytics.component';
import {CollegeCollectionsComponent} from './college-collections/college-collections.component';
import {CollegeCollectionComponent} from './college-collection/college-collection.component';


const routes: Routes = [
  {
      path: '',  component: MembersComponent,   children: [
    { path: 'state-search', component: StateSearchComponent },
    { path: 'state-analytics', component: StateAnalyticsComponent },
    { path: 'college-search', component: CollegeSearchComponent},
    { path: 'college-analytics', component: CollegeAnalyticsComponent },
    { path: 'college-collections', component: CollegeCollectionsComponent },
    { path: 'college-collections/new', component: CollegeCollectionComponent },
    { path: 'widgets', component: WidgetsComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MembersRoutingModule {}
