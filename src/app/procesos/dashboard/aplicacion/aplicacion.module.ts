import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AplicacionComponent } from './aplicacion.component';
import { EngobeComponent } from './engobe/engobe.component';
import { EsmalteComponent } from './esmalte/esmalte.component';



@NgModule({
  declarations: [AplicacionComponent, EngobeComponent, EsmalteComponent],
  imports: [
    CommonModule
  ], exports:[AplicacionComponent]
})
export class AplicacionModule { }
