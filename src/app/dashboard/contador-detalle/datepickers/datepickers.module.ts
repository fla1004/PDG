import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickersComponent2 } from './datepickers.component';



@NgModule({
  declarations: [DatepickersComponent2],
  imports: [
    CommonModule
  ], exports:[DatepickersComponent2]
})
export class DatepickersModule { }
