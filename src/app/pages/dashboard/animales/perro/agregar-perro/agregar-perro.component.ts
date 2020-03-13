import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Form, NgForm } from '@angular/forms';
import { AnimalesService } from '../../../../../core/services/animales/animales.service';

@Component({
  selector: 'app-agregar-perro',
  templateUrl: './agregar-perro.component.html',
  styleUrls: ['./agregar-perro.component.css']
})
export class AgregarPerroComponent implements OnInit {

  imagenSubir: File;
  imagenTemp: string | ArrayBuffer;

  constructor(
    private animalesService: AnimalesService
  ) { }

  ngOnInit(): void {
  }

  seleccionImage(archivo: File) {

    if (!archivo) {
      this.imagenSubir = null;
      return;
    }

    if (archivo.type.indexOf('image') < 0) {
      Swal.fire('Sólo imágenes', 'El archivo seleccionado no es una imagen', 'error');
      this.imagenSubir = null;
      return;
    }

    this.imagenSubir = archivo;

    const reader = new FileReader();
    const urlImagenTemp = reader.readAsDataURL(archivo);

    reader.onloadend = () => this.imagenTemp = reader.result;

  }

  agregarPerro(f: NgForm) {
    console.log(f.value);
    if (f.valid) {
      this.animalesService.agregarPerro(f.value, this.imagenSubir)
      .then((res: any) => {
        Swal.fire({
          title: 'Perro agregado',
          text: 'El perro se agrego con éxito',
          icon: 'success'
        });
      })
      .catch((err: any) => {
        console.log(err);
        Swal.fire({
          title: 'Error',
          text: 'No se agregó el perro',
          icon: 'error'
        });
      });
    }
  }

}
