import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FvScheduleComponent } from './fv-schedule.component';
import { SharedModule } from '../../shared/shared.module';
import { FvEnrollmentRoutingModule } from './fv-schedule-routing.module';


@NgModule({
  declarations: [
    FvScheduleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FvEnrollmentRoutingModule
  ],
  exports: [
    FvScheduleComponent,
  ]
})
export class FvScheduleModule { }
