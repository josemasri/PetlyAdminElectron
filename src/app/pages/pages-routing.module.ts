import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WellcomeComponent } from './dashboard/wellcome/wellcome.component';
import { AgregarVeterinarioComponent } from './dashboard/veterinarios/agregar-veterinario/agregar-veterinario.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: WellcomeComponent},
      { path: 'add-vet', component: AgregarVeterinarioComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
