import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FvVirtualLicenseComponent } from './fv-virtual-license.component';
import { FvVirtualLicenseRoutingModule } from './fv-virtual-license-routing.module';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

@NgModule({
  declarations: [
    FvVirtualLicenseComponent
  ],
  imports: [
    CommonModule,
    FvVirtualLicenseRoutingModule,
    NgxQRCodeModule
  ],
  exports: [
    FvVirtualLicenseComponent,
  ]
})
export class FvVirtualLicenseModule { }
