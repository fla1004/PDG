import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContadorDetalleComponent } from './dashboard/contador-detalle/contador-detalle.component';
import { AplicacionDetalleComponent } from './dashboard/aplicacion-detalle/aplicacion-detalle.component';

const routes: Routes = [
  {
    path:'',
    component: DashboardComponent,
  },
    { path:'contador',
      component: ContadorDetalleComponent,     
    },
    { path:'detalleEngobe',
    component: AplicacionDetalleComponent,     
    },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
