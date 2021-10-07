import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FvStudentsComponent } from './fv-students.component';
import { SharedModule } from '../../shared/shared.module';
import { FvEnrollmentRoutingModule } from './fv-students-routing.module';


@NgModule({
  declarations: [
    FvStudentsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FvEnrollmentRoutingModule
  ],
  exports: [
    FvStudentsComponent,
  ]
})
export class FvStudentsModule { }
