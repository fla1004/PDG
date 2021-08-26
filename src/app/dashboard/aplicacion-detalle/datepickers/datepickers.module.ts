import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickersComponent } from './datepickers.component';



@NgModule({
  declarations: [DatepickersComponent],
  imports: [
    CommonModule
  ], exports:[DatepickersComponent]
})
export class DatepickersModule { }
