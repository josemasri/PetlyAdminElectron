import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.css']
})
export class WellcomeComponent implements OnInit {

  charts = [
    {
      title: 'Animales en Albergue',
      labels: ['Perros', 'Gatos', 'Aves', 'Roedores', 'Peces'],
      data: [30, 15, 20, 12, 14]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
