import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WellcomeComponent } from './dashboard/wellcome/wellcome.component';
import { AgregarVeterinarioComponent } from './dashboard/veterinarios/agregar-veterinario/agregar-veterinario.component';
import { AuthGuard } from '../auth/auth.guard';
import { VisualizarVetrinariosComponent } from './dashboard/veterinarios/visualizar-vetrinarios/visualizar-vetrinarios.component';
import { AgregarPerroComponent } from './dashboard/animales/perro/agregar-perro/agregar-perro.component';
import { VisualizarPerrosComponent } from './dashboard/animales/perro/visualizar-perros/visualizar-perros.component';
import { VisualizarDonacionesComponent } from './dashboard/donaciones/visualizar-donaciones/visualizar-donaciones.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: WellcomeComponent },
      { path: 'add-vet', component: AgregarVeterinarioComponent },
      { path: 'view-vet', component: VisualizarVetrinariosComponent },
      { path: 'add-dog', component: AgregarPerroComponent },
      { path: 'view-dogs', component: VisualizarPerrosComponent },
      { path: 'view-don', component: VisualizarDonacionesComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
