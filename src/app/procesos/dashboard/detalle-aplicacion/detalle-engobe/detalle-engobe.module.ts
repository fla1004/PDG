import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleEngobeComponent } from './detalle-engobe.component';
import { EngobeComponent } from './tablas/engobe/engobe.component';
import { TablaEsmalteComponent } from './tablas/tabla-esmalte/tabla-esmalte.component';
import { TablaEngobeComponent } from './tablas/tabla-engobe/tabla-engobe.component';

@NgModule({
  declarations: [DetalleEngobeComponent, EngobeComponent, TablaEsmalteComponent, TablaEngobeComponent],
  imports: [
    CommonModule
  ], exports:[DetalleEngobeComponent]
})
export class DetalleEngobeModule { }
