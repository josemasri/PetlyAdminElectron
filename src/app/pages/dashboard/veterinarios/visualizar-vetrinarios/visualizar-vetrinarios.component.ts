import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../../core/services/usuario/usuario.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-visualizar-vetrinarios',
  templateUrl: './visualizar-vetrinarios.component.html',
  styleUrls: ['./visualizar-vetrinarios.component.css']
})
export class VisualizarVetrinariosComponent implements OnInit {

  veterinarios = [];

  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.usuarioService.obtenerVeterinarios()
      .pipe(
        catchError((err: any) => {
          throw err;
        })
      )
      .subscribe((res: any) => {
        this.veterinarios = res.results;
      });
  }

}
