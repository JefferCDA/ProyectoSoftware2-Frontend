import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FvEnrollmentComponent } from './fv-enrollment.component';
import { SharedModule } from '../../shared/shared.module';
import { FvEnrollmentRoutingModule } from './fv-enrollment-routing.module';


@NgModule({
  declarations: [
    FvEnrollmentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FvEnrollmentRoutingModule
  ],
  exports: [
    FvEnrollmentComponent,
  ]
})
export class FvEnrollmentModule { }
