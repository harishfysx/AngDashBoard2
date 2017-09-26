import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StateSearchComponent} from './state-search/state-search.component';
import {MembersComponent} from './members.component';
import {StateAnalyticsComponent} from './state-analytics/state-analytics.component';
import {WidgetsComponent} from './widgets/widgets.component';
import {CollegeSearchComponent} from './college-search/college-search.component';
import {CollegeCollectionsComponent} from './college-collections/college-collections.component';
import {CollegeCollectionComponent} from './college-collection/college-collection.component';
import {CollegeViewCollectionComponent} from './college-view-collection/college-view-collection.component';
import {CollegeAddStudentComponent} from './college-add-student/college-add-student.component';


const routes: Routes = [
  {
      path: '',  component: MembersComponent,   children: [
    { path: 'state-search', component: StateSearchComponent },
    { path: 'state-analytics', component: StateAnalyticsComponent },
    { path: 'college-search', component: CollegeSearchComponent},
    { path: 'college-collections/new', component: CollegeCollectionComponent },
    { path: 'college-collections/:className', component: CollegeViewCollectionComponent },
    { path: 'college-collections/addStudent/:className', component: CollegeAddStudentComponent },
    { path: 'college-collections', component: CollegeCollectionsComponent },
    { path: 'widgets', component: WidgetsComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MembersRoutingModule {}
