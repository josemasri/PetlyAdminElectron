import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { PageNotFoundComponent } from './components/';
import { WebviewDirective } from './directives/';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PolarChartComponent } from './components/polar-chart/polar-chart.component';

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective, DoughnutChartComponent, NavbarComponent, PolarChartComponent],
  imports: [CommonModule, TranslateModule, RouterModule, FormsModule, ChartsModule, NgbModule],
  exports: [TranslateModule, WebviewDirective, FormsModule, DoughnutChartComponent, NavbarComponent, PolarChartComponent],
})
export class SharedModule { }
