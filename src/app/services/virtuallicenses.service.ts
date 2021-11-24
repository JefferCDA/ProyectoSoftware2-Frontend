import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VirtualLicensesService {
  private urlApi= 'http://127.0.0.1:8000/api/Virtuallicense';
  constructor(private http: HttpClient ) {
  }

  public getAllLicenses(): Observable<any>{
    return this.http.get(this.urlApi );
  }

  public getLicense(licenseId: Number): Observable<any>{
    return this.http.get(`${this.urlApi}/${licenseId}`);
  }
  public postLicense(body: any){
    return this.http.post(this.urlApi, body );
  }
  public putLicense(body: any){
    return this.http.put(`${this.urlApi}`, body);
  }
  public deleteLicense(licenseId: number){
    return this.http.delete(`${this.urlApi}/${licenseId}`);
  }
}
