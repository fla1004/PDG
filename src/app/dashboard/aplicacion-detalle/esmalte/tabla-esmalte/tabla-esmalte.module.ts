import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaEsmalteComponent } from './tabla-esmalte.component';

@NgModule({
  declarations: [TablaEsmalteComponent],
  imports: [
    CommonModule
  ], exports:[TablaEsmalteComponent]
})
export class TablaEsmalteModule { }
