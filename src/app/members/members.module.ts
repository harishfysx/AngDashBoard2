
import {NgModule} from '@angular/core';
import {UiModule} from '../ui/ui.module';
import {CommonModule} from '@angular/common';
import {MembersRoutingModule} from './members.routing.module';
import { StateSearchComponent } from './state-search/state-search.component';
import {NiComponentsModule} from '../ni-components/ni-components.module';
import {MembersComponent} from './members.component';
import { StateAnalyticsComponent } from './state-analytics/state-analytics.component';
import { WidgetsComponent } from './widgets/widgets.component';
import {MaterialModule} from '@angular/material';
import {ChartsModule} from 'ng2-charts';
import {AmChartsModule} from '@amcharts/amcharts3-angular';
import {AgmCoreModule} from '@agm/core';
import {FormsModule} from '@angular/forms';
import { SmsComponent } from './sms/sms.component';
import { CollegeSearchComponent } from './college-search/college-search.component';
import { CollegeAnalyticsComponent } from './college-analytics/college-analytics.component';
import { CollegeCollectionsComponent } from './college-collections/college-collections.component';
import {MdTableModule} from '@angular/material';

@NgModule({
  declarations: [
    StateSearchComponent,
    MembersComponent,
    StateAnalyticsComponent,
    WidgetsComponent,
    SmsComponent,
    CollegeSearchComponent,
    CollegeAnalyticsComponent,
    CollegeCollectionsComponent
  ],
  entryComponents: [SmsComponent],
  imports: [UiModule,
    CommonModule,
    FormsModule,
    ChartsModule,
    AmChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAU9f7luK3J31nurL-Io3taRKF7w9BItQE'
    }),
    MaterialModule,
    MembersRoutingModule,
    NiComponentsModule,
    MdTableModule
    ],
  providers: []
})
export class MembersModule {}
