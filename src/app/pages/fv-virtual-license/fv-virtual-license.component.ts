import { Component, OnInit } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
@Component({
  selector: 'app-fv-virtual-license',
  templateUrl: './fv-virtual-license.component.html',
  styleUrls: ['./fv-virtual-license.component.scss'],
})
export class FvVirtualLicenseComponent implements OnInit {


  constructor() {
  }
  profilePhoto = 'assets/images/unknownphoto.png';
  logoUR = 'assets/images/logoURwhite.png'
  showQr=false;

  url='https://myevents.com';
  profile= 'routeToMyProfile';
  elementType = NgxQrcodeElementTypes.URL;
  errorCorrectionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;

  value = this.url + this.profile;

  ngOnInit() {
  }
  showQR(){
    if (!this.showQr){
      this.showQr=true;
    }else{
      this.showQr=false;
    }
  }
}
