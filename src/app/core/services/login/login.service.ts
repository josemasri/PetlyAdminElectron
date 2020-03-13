import { AppConfig } from './../../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ResLogin } from '../../../interfaces/interfaces';
import { StorageMap } from '@ngx-pwa/local-storage';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token: string;
  usuario;

  constructor(
    private http: HttpClient,
    private router: Router,
    private storage: StorageMap
  ) {
    this.storage.get('token').subscribe((token: any) => {
      console.log(token);
      this.token = token || null;
    });
  }

  verifyLogin(email: string, password: string) {
    this.http.post<ResLogin>(`${AppConfig.SERVICES_URL}/cuentas/login`, { email, password })
      .pipe(
        catchError((err) => {
          Swal.fire(
            'Ha ocurrido un error',
            'Usuario/Contraseña incorrectos',
            'error'
          );
          throw err;
        })
      )
      .subscribe((res: any) => {
        this.usuario = res.usuario;
        this.setToken(res.token);
        this.router.navigate(['dashboard']);
      });
  }
  setToken(token: string) {
    this.token = token;
    this.storage.set('token', this.token);
  }
}
