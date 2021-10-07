import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FvVirtualLicenseComponent } from "./fv-virtual-license.component";

const routes: Routes = [
  {
    path: '',
    component: FvVirtualLicenseComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FvVirtualLicenseRoutingModule {

}