import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaEngobeComponent } from './tabla-engobe.component';


@NgModule({
  declarations: [TablaEngobeComponent],
  imports: [
    CommonModule
  ], exports:[TablaEngobeComponent]
})
export class TablaEngobeModule { }
