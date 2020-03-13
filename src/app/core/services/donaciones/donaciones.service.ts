import { AppConfig } from './../../../../environments/environment.dev';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class DonacionesService {

  constructor(
    private http: HttpClient,
    private loginService: LoginService
  ) { }

  getDonaciones() {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-token': this.loginService.token
      })
    };
    return this.http.get(`${AppConfig.SERVICES_URL}/donaciones`, httpOptions);
  }
}
