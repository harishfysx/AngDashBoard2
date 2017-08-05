
import {NgModule} from '@angular/core';
import {MembersComponent} from './members.component';
import {UiModule} from '../ui/ui.module';

@NgModule({
  declarations: [
    MembersComponent
  ],
  imports: [UiModule]
})
export class MembersModule {}
