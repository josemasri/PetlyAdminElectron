import { AppConfig } from './../../../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Usuario } from '../../../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient,
    private loginService: LoginService
  ) { }

  agregarVeterinario(veterinario: Usuario) {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-token': this.loginService.token
      })
    };
    return this.http.post(`${AppConfig.SERVICES_URL}/cuentas/registro/veterinario`, veterinario, httpOptions);
  }
}
