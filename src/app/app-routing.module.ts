import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContadorDetalleComponent } from './dashboard/contador-detalle/contador-detalle.component';
import { EsmalteComponent } from './dashboard/aplicacion-detalle/esmalte/esmalte.component';
import { EngobeComponent } from './dashboard/aplicacion-detalle/engobe/engobe.component';

const routes: Routes = [
  {
    path:'',
    component: DashboardComponent,
  },
    { path:'contador',
      component: ContadorDetalleComponent,     
    },
    { path:'aplicacion-engobe',
    component: EngobeComponent,     
    }, 
    { path:'aplicacion-esmalte',
    component: EsmalteComponent,     
    }
    
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
