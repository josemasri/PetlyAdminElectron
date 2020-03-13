import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';
import { AppConfig } from '../../../../environments/environment.web';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimalesService {

  urlServicios = AppConfig.SERVICES_URL;

  constructor(
    private loginService: LoginService,
    private http: HttpClient
  ) { }

  agregarPerro(perro: any, archivo: File) {
    return new Promise((resolve, reject) => {

      const formData = new FormData();
      const xhr = new XMLHttpRequest();

      formData.append('img', archivo, archivo.name);
      formData.append("nombre", perro.nombre);
      formData.append("estructuraVertebral", perro.estructuraVertebral);
      formData.append("tipoReproduccion", perro.tipoReproduccion);
      formData.append("medioDeVida", perro.medioDeVida);
      formData.append("habitosNaturales", perro.habitosNaturales);
      formData.append("excresion", perro.excresion);
      formData.append("sexo", perro.sexo);
      formData.append("dieta", perro.dieta);
      formData.append("edad", perro.edad);
      formData.append("raza", perro.raza);
      formData.append("tamano", perro.tamano);

      xhr.onreadystatechange = () => {

        if (xhr.readyState === 4) {

          if (xhr.status === 201) {
            console.log('Perro agregado');
            resolve(JSON.parse(xhr.response));
          } else {
            console.log('Fallo la subida');
            reject(xhr.response);
          }

        }
      };

      const url = `${this.urlServicios}/animales/perro`;

      xhr.open('POST', url, true);
      xhr.setRequestHeader("x-token", this.loginService.token);
      xhr.send(formData);
    });
  }


  obtenerPerros() {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-token': this.loginService.token
      })
    };
    return this.http.get(`${this.urlServicios}/animales/perro`, httpOptions);
  }

}
