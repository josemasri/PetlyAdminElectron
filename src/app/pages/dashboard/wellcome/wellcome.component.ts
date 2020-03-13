import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.css']
})
export class WellcomeComponent implements OnInit {

  doughnutCharts = [
    {
      title: 'Animales en Albergue',
      labels: ['Perros', 'Gatos', 'Aves', 'Roedores', 'Peces'],
      data: [30, 15, 20, 12, 14]
    },
    {
      title: 'Animales en Adopcion Usuarios',
      labels: ['Perros', 'Gatos', 'Aves', 'Roedores', 'Peces'],
      data: [150, 200, 1500, 220, 1800]
    },
    {
      title: 'Usuarios Registrados',
      labels: ['Administradores', 'Vetrinarios', 'Usuarios'],
      data: [1, 10, 1500]
    }
  ];

  polarCharts = [
    {
      title: 'Donaciones',
      labels: ['$1000', '$500', '$100', '$50'],
      data: [25, 40, 50, 75]
    },
    {
      title: 'Voluntarios por albergue',
      labels: ['Sur', 'Norte', 'Este', 'Oeste'],
      data: [55, 40, 35, 60]
    },
    {
      title: 'Edad Voluntarios',
      labels: ['10-20', '20-30', '30-40', '40-50', '50-60', '60+'],
      data: [14, 20, 30, 25, 22, 34]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
