import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  @Input() title: string;
  @Input() doughnutChartLabels;
  @Input() doughnutChartData;
  public doughnutChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

}
