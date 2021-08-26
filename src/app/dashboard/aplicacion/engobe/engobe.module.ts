import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EngobeComponent } from './engobe.component';



@NgModule({
  declarations: [EngobeComponent],
  imports: [
    CommonModule
  ],exports:[EngobeComponent]
})
export class EngobeModule { }
