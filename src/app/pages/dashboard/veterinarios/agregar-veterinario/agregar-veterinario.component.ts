import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../../interfaces/interfaces';
import Swal from 'sweetalert2';
import { UsuarioService } from '../../../../core/services/usuario/usuario.service';
import { catchError } from 'rxjs/operators';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-agregar-veterinario',
  templateUrl: './agregar-veterinario.component.html',
  styleUrls: ['./agregar-veterinario.component.css']
})
export class AgregarVeterinarioComponent implements OnInit {

  veterinario: Usuario;
  faPlusCircle = faPlusCircle;


  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.veterinario = {
      id: 0,
      nombre: '',
      apellidoP: '',
      apellidoM: '',
      password: '',
      confirmPassword: '',
      email: '',
      rol: 'VET_ROL'
    };
  }

  agregar() {
    if (this.veterinario.nombre === '' ||
      this.veterinario.apellidoM === '' ||
      this.veterinario.apellidoP === '' ||
      this.veterinario.email === '' ||
      this.veterinario.password === '' ||
      this.veterinario.confirmPassword === ''
    ) {
      Swal.fire(
        'Completa los datos',
        'Ingresa todos los datos',
        'error'
      );
    }
    else if (this.veterinario.password != this.veterinario.confirmPassword) {
      Swal.fire(
        'Las contraseñas no coinciden',
        'Ingresa la misma contraseña',
        'error'
      );
    } else {
      // Llamar servicio de usuarios
      this.usuarioService.agregarVeterinario(this.veterinario)
      .pipe(
        catchError(err => {
          Swal.fire(
            'Error',
            'El veterinario no se agregó',
            'error'
          );
          throw err;
        })
      )
      .subscribe(res => {
        Swal.fire(
          'Veterinario Agregado',
          'El veterinario se agrego a la BD',
          'success'
        );
      });
    }
  }

}
