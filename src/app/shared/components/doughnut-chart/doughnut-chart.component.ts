import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  @Input() title: string;
  @Input() doughnutChartLabels;
  // public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  // @Input() doughnutChartData = [120, 150, 180, 90];
  @Input() doughnutChartData;
  public doughnutChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

}
