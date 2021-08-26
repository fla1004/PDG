import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsmalteComponent } from './esmalte.component';



@NgModule({
  declarations: [EsmalteComponent],
  imports: [
    CommonModule
  ], exports:[EsmalteComponent]
})
export class EsmalteModule { }
