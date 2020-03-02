import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';


import { PageNotFoundComponent } from './components/';
import { WebviewDirective } from './directives/';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ChartsModule } from 'ng2-charts';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';

import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective, SidebarComponent, DoughnutChartComponent],
  imports: [CommonModule, TranslateModule, RouterModule, FormsModule, ChartsModule, MatSidenavModule, MatMenuModule],
  exports: [TranslateModule, WebviewDirective, FormsModule, SidebarComponent, DoughnutChartComponent],
})
export class SharedModule { }
