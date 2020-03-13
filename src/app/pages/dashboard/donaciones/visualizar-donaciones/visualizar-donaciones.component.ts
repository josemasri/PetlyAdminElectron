import { Component, OnInit } from '@angular/core';
import { DonacionesService } from '../../../../core/services/donaciones/donaciones.service';

@Component({
  selector: 'app-visualizar-donaciones',
  templateUrl: './visualizar-donaciones.component.html',
  styleUrls: ['./visualizar-donaciones.component.css']
})
export class VisualizarDonacionesComponent implements OnInit {

  donaciones: [];

  constructor(
    private donacionesService: DonacionesService
  ) { }

  ngOnInit(): void {
    this.donacionesService.getDonaciones()
    .subscribe((res:any) => {
      this.donaciones = res.donaciones
    });
  }

}
