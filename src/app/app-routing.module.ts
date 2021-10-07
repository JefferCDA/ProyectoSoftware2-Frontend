import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerAppComponent } from './pages/container-app/container-app.component';
const routes: Routes = [
  {
    path: '',
    component: ContainerAppComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'license',
        loadChildren: () =>
          import('./pages/fv-virtual-license/fv-virtual-license.module').then(
            (m) => m.FvVirtualLicenseModule
          ),
      },
      {
        path: 'enrollment',
        loadChildren: () =>
          import('./pages/fv-enrollment/fv-enrollment.module').then(
            (m) => m.FvEnrollmentModule
          ),
      },
      {
        path: 'students',
        loadChildren: () =>
          import('./pages/fv-students/fv-students.module').then(
            (m) => m.FvStudentsModule
          ),
      },
      {
        path: 'schedule',
        loadChildren: () =>
          import('./pages/fv-schedule/fv-schedule.module').then(
            (m) => m.FvScheduleModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
    ]
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then(
        (m) => m.LoginModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
