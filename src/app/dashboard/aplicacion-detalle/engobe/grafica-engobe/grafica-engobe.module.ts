import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficaEngobeComponent } from './grafica-engobe.component';

@NgModule({
  declarations: [GraficaEngobeComponent],
  imports: [
    CommonModule
  ], exports:[GraficaEngobeComponent]
})
export class GraficaEngobeModule { }
