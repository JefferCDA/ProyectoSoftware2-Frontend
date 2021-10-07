import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FvScheduleComponent } from "./fv-schedule.component";

const routes: Routes = [
  {
    path: '',
    component: FvScheduleComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FvEnrollmentRoutingModule {

}