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
import { AgregarVeterinarioComponent } from './dashboard/veterinarios/agregar-veterinario/agregar-veterinario.component';
import { VisualizarVetrinariosComponent } from './dashboard/veterinarios/visualizar-vetrinarios/visualizar-vetrinarios.component';
import { AgregarPerroComponent } from './dashboard/animales/perro/agregar-perro/agregar-perro.component';
import { VisualizarPerrosComponent } from './dashboard/animales/perro/visualizar-perros/visualizar-perros.component';;
import { PipesModule } from '../pipes/pipes.module';
import { VisualizarDonacionesComponent } from './dashboard/donaciones/visualizar-donaciones/visualizar-donaciones.component';


@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    WellcomeComponent,
    AgregarVeterinarioComponent,
    VisualizarVetrinariosComponent,
    AgregarPerroComponent,
    VisualizarPerrosComponent,
    VisualizarDonacionesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    SweetAlert2Module,
    FontAwesomeModule,
    ChartsModule,
    PipesModule
  ]
})
export class PagesModule { }
