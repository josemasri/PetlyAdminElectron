import { AppConfig } from './../../../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Usuario } from '../../../interfaces/interfaces';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient,
    private loginService: LoginService,
    private router: Router
  ) { }

  agregarVeterinario(veterinario: Usuario) {
    if(!this.verifyLogin()){
      Swal.fire(
        'Tu sesión caduco',
        'Porfavor vuelve a iniciar seción',
        'error'
      )
      return;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'x-token': this.loginService.token
      })
    };
    return this.http.post(`${AppConfig.SERVICES_URL}/cuentas/registro/veterinario`, veterinario, httpOptions);
  }

  obtenerVeterinarios() {
    if(!this.verifyLogin()){
      Swal.fire(
        'Tu sesión caduco',
        'Porfavor vuelve a iniciar seción',
        'error'
      )
      return;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'x-token': this.loginService.token
      })
    };
    return this.http.get(`${AppConfig.SERVICES_URL}/cuentas/veterinarios`, httpOptions);
  }

  verifyLogin() {
    if (!this.loginService.token) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
