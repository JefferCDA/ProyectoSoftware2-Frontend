import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FvVirtualLicenseComponent } from './fv-virtual-license.component';
import { FvVirtualLicenseRoutingModule } from './fv-virtual-license-routing.module';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FvVirtualLicenseComponent],
  imports: [
    CommonModule,
    FvVirtualLicenseRoutingModule,
    NgxQRCodeModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [FvVirtualLicenseComponent],
})
export class FvVirtualLicenseModule {}
