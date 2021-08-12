import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './procesos/dashboard/dashboard.component';
import { ContadorDetalleComponent } from './procesos/contador-detalle/contador-detalle.component';
import { PruebaComponent } from './procesos/contador-detalle/prueba/prueba.component';
import { DetalleEngobeComponent } from './procesos/dashboard/detalle-aplicacion/detalle-engobe/detalle-engobe.component';

const routes: Routes = [
  {
    path:'',
    component: DashboardComponent,
  },
    { path:'contador',
      component: ContadorDetalleComponent,     
    },
    { path:'detalleEngobe',
    component: DetalleEngobeComponent,     
    },
    { path:'prueba',
      component: PruebaComponent,     
    },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
