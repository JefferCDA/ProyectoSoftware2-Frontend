import { Component, OnInit } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VirtualLicensesService } from '../../services/virtuallicenses.service';
import { VirtualLicense } from '../../interfaces/VirtualLicense.interface'

@Component({
  selector: 'app-fv-virtual-license',
  templateUrl: './fv-virtual-license.component.html',
  styleUrls: ['./fv-virtual-license.component.scss'],
})
export class FvVirtualLicenseComponent implements OnInit {

  public form: FormGroup;
  showM: String;
  title: string;
  virtualLicense: VirtualLicense ;

  private virtualLicensesService: VirtualLicensesService
  constructor(private formBuilder: FormBuilder,) {
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
    this.formBuilderCreate();
    this.loadLicenses();
  }
  private formBuilderCreate() {
    this.form = this.formBuilder.group({
      id: [],
      name: [],
      lastName: [],
      document: [],
      program: [],
      photo: [],
    });
  }
  showModal(event: string, titlo: string) {
    this.showM = event;
    this.title = titlo;
  }
  closeModal(e: string) {
    this.showM = e;
  }
  public loadLicenses() {
    try {
      this.virtualLicensesService.getAllLicenses().subscribe(res => {
      this.virtualLicense = res.result;
    });
    }catch(err){
      console.log(err)
    }

  }
  public loadLicense(id: number) {
    this.virtualLicensesService.getLicense(id).subscribe(res => {
      console.log(res);
    });
  }
  public createProduct() {
    console.log(this.form.value);
    this.virtualLicensesService.postLicense(
      this.form.value
    ).subscribe(res => {
      console.log(res);
      this.form.reset();
    })
  }
  updateLicense() {
    try {
      this.virtualLicensesService
        .putLicense(this.form.value)
        .subscribe((res) => {
          console.log(res);
          this.form.reset();
        });
    } catch (err) {
      console.log(err);
    }
  }
  public deleteLicense(id: number) {
    try {
      this.virtualLicensesService.deleteLicense(id)
        .subscribe(res => {
          this.loadLicenses();
        })
    } catch (error) {
      console.log(error);
    }
  }


  showQR(){
    if (!this.showQr){
      this.showQr=true;
    }else{
      this.showQr=false;
    }
  }
}
