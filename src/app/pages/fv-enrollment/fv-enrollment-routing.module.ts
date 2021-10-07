import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FvEnrollmentComponent } from "./fv-enrollment.component";

const routes: Routes = [
  {
    path: '',
    component: FvEnrollmentComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FvEnrollmentRoutingModule {

}