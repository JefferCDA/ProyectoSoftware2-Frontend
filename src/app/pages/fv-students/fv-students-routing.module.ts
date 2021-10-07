import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FvStudentsComponent } from "./fv-students.component";

const routes: Routes = [
  {
    path: '',
    component: FvStudentsComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FvEnrollmentRoutingModule {

}