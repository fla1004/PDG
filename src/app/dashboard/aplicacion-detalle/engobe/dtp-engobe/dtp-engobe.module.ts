import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DtpEngobeComponent } from './dtp-engobe.component';

@NgModule({
  declarations: [DtpEngobeComponent],
  imports: [
    CommonModule
  ], exports:[DtpEngobeComponent]
})
export class DtpEngobeModule { }
