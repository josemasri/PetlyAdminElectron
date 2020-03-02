import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WellcomeComponent } from './dashboard/wellcome/wellcome.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AgregarVeterinarioComponent } from './dashboard/veterinarios/agregar-veterinario/agregar-veterinario.component';


@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    WellcomeComponent,
    AgregarVeterinarioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    SweetAlert2Module,
    FontAwesomeModule,
    ChartsModule,
    MatSidenavModule
  ]
})
export class PagesModule { }
