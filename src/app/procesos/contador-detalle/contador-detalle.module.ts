import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorDetalleComponent } from './contador-detalle.component';
import { LinechartComponent } from './linechart/linechart.component';
import { PruebaComponent } from './prueba/prueba.component';
import { TablaComponent } from './tabla/tabla.component';

@NgModule({
  declarations: [ContadorDetalleComponent, LinechartComponent, PruebaComponent, TablaComponent ],
  imports: [
    CommonModule
  ], exports:[ContadorDetalleComponent ]
})
export class ContadorDetalleModule { }
