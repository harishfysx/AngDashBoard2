
import {NgModule} from '@angular/core';
import {MembersComponent} from './members.component';
import {UiModule} from '../ui/ui.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    MembersComponent
  ],
  imports: [UiModule,CommonModule]
})
export class MembersModule {}
