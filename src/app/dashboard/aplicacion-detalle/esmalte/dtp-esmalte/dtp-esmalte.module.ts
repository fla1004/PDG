import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DtpEsmalteComponent } from './dtp-esmalte.component';

@NgModule({
  declarations: [DtpEsmalteComponent],
  imports: [
    CommonModule
  ], exports:[DtpEsmalteComponent]
})
export class DtpEsmalteModule { }
