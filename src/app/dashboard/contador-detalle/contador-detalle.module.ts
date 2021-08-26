import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorDetalleComponent } from './contador-detalle.component';
import { PruebaComponent } from './prueba/prueba.component';
import { DatepickersComponent } from './datepickers/datepickers.component';
import { TablaComponent } from './tabla/tabla.component';
import { GraficosComponent } from './graficos/graficos.component';

@NgModule({
  declarations: [ContadorDetalleComponent, PruebaComponent, DatepickersComponent, TablaComponent, GraficosComponent, ],
  imports: [
    CommonModule
  ], exports:[ContadorDetalleComponent ]
})
export class ContadorDetalleModule { }
