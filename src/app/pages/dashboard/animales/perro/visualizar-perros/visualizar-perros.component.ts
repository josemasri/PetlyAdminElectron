import { Component, OnInit } from '@angular/core';
import { AnimalesService } from '../../../../../core/services/animales/animales.service';

@Component({
  selector: 'app-visualizar-perros',
  templateUrl: './visualizar-perros.component.html',
  styleUrls: ['./visualizar-perros.component.css']
})
export class VisualizarPerrosComponent implements OnInit {
  perros: any[];

  constructor(
    private animalesService: AnimalesService
  ) { }

  ngOnInit(): void {
    this.animalesService.obtenerPerros().subscribe((res: any) => {
      this.perros = res.perros;
    });
  }

}
