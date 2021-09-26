import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';


import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContadorDetalleComponent } from './dashboard/contador-detalle/contador-detalle.component';
import { AplicacionComponent } from './dashboard/aplicacion/aplicacion.component';

import { TablaEsmalteComponent } from './dashboard/aplicacion-detalle/esmalte/tabla-esmalte/tabla-esmalte.component';/* './dashboard/aplicacion-detalle/tablas/tabla-esmalte/tabla-esmalte.component';*/
import { ContadorComponent } from './dashboard/contador/contador.component';
import { TablaComponent } from './dashboard/contador-detalle/tabla/tabla.component';
import { DatepickersComponent2 } from './dashboard/contador-detalle/datepickers/datepickers.component';

import { GoogleChartsModule } from 'angular-google-charts';
import { GraficosComponent } from './dashboard/contador-detalle/graficos/graficos.component';
import { GraficaEsmalteComponent } from './dashboard/aplicacion-detalle/esmalte/grafica-esmalte/grafica-esmalte.component';/*'./dashboard/aplicacion-detalle/graficos/grafica-esmalte/grafica-esmalte.component';*/

import { EsmalteComponent } from './dashboard/aplicacion-detalle/esmalte/esmalte.component';

import { DtpEsmalteComponent } from './dashboard/aplicacion-detalle/esmalte/dtp-esmalte/dtp-esmalte.component';
import { EngobeComponent } from './dashboard/aplicacion-detalle/engobe/engobe.component';
import { DtpEngobeComponent } from './dashboard/aplicacion-detalle/engobe/dtp-engobe/dtp-engobe.component';
import { TablaEngobeComponent } from './dashboard/aplicacion-detalle/engobe/tabla-engobe/tabla-engobe.component';
import { GraficaEngobeComponent } from './dashboard/aplicacion-detalle/engobe/grafica-engobe/grafica-engobe.component';
import { EngobeComponent2 } from './dashboard/aplicacion/engobe/engobe.component';
import { EsmalteComponent2 } from './dashboard/aplicacion/esmalte/esmalte.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ContadorComponent,
    ContadorDetalleComponent,
    AplicacionComponent,
    EngobeComponent,
    EsmalteComponent,
    TablaComponent,
    DatepickersComponent2,
    GraficosComponent,
    GraficaEsmalteComponent,
    DtpEsmalteComponent,
    TablaEsmalteComponent,
    DtpEngobeComponent,
    TablaEngobeComponent,
    GraficaEngobeComponent,
    EngobeComponent2,
    EsmalteComponent2 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    FormsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    
    GoogleChartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
