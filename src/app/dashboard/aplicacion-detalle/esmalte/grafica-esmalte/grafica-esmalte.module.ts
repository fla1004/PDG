import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficaEsmalteComponent } from './grafica-esmalte.component';

@NgModule({
  declarations: [GraficaEsmalteComponent ],
  imports: [
    CommonModule
  ], exports:[GraficaEsmalteComponent ]
})
export class GraficaEsmalteModule { }
