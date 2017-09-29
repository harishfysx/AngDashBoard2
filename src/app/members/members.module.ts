
import {NgModule} from '@angular/core';
import {UiModule} from '../ui/ui.module';
import {CommonModule} from '@angular/common';
import {MembersRoutingModule} from './members.routing.module';
import { StateSearchComponent } from './state-search/state-search.component';
import {NiComponentsModule} from '../ni-components/ni-components.module';
import {MembersComponent} from './members.component';
import { StateAnalyticsComponent } from './state-analytics/state-analytics.component';
import { WidgetsComponent } from './widgets/widgets.component';
import {ChartsModule} from 'ng2-charts';
import {AmChartsModule} from '@amcharts/amcharts3-angular';
import {AgmCoreModule} from '@agm/core';
import {FormsModule} from '@angular/forms';
import { SmsComponent } from './sms/sms.component';
import { CollegeSearchComponent } from './college-search/college-search.component';
import { CollegeCollectionsComponent } from './college-collections/college-collections.component';
import {CdkTableModule} from '@angular/cdk/table';
import { CollegeCollectionComponent } from './college-collection/college-collection.component';
import {CustomFormsModule} from 'ng2-validation';
import { CollegeViewCollectionComponent } from './college-view-collection/college-view-collection.component';
import { CollegeAddStudentComponent } from './college-add-student/college-add-student.component';
import {MatPaginatorModule, MatTableModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule,
  MatButtonModule, MatDialogModule, MatCardModule, MatProgressBarModule, MatSnackBarModule } from '@angular/material';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [
    StateSearchComponent,
    MembersComponent,
    StateAnalyticsComponent,
    WidgetsComponent,
    SmsComponent,
    CollegeSearchComponent,
    CollegeCollectionsComponent,
    CollegeCollectionComponent,
    CollegeViewCollectionComponent,
    CollegeAddStudentComponent
  ],
  entryComponents: [SmsComponent],
  imports: [UiModule,
    CommonModule,
    FormsModule,
    CustomFormsModule,
    ChartsModule,
    AmChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAU9f7luK3J31nurL-Io3taRKF7w9BItQE'
    }),
    MembersRoutingModule,
    NiComponentsModule,
    CdkTableModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatSnackBarModule,
    MatProgressBarModule,
    NgxDatatableModule
  ],
  providers: []
})
export class MembersModule {}
