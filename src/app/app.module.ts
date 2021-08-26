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
import { EngobeComponent } from './dashboard/aplicacion/engobe/engobe.component';
import { EsmalteComponent } from './dashboard/aplicacion/esmalte/esmalte.component';
import { TablaEsmalteComponent } from './dashboard/aplicacion-detalle/tablas/tabla-esmalte/tabla-esmalte.component';
import { DatepickersComponent } from './dashboard/aplicacion-detalle/datepickers/datepickers.component';
import { AplicacionDetalleComponent } from './dashboard/aplicacion-detalle/aplicacion-detalle.component';
import { TablaEngobeComponent } from './dashboard/aplicacion-detalle/tablas/tabla-engobe/tabla-engobe.component';
import { ContadorComponent } from './dashboard/contador/contador.component';
import { TablaComponent } from './dashboard/contador-detalle/tabla/tabla.component';
import { DatepickersComponent2 } from './dashboard/contador-detalle/datepickers/datepickers.component';

import { GoogleChartsModule } from 'angular-google-charts';
import { GraficosComponent } from './dashboard/contador-detalle/graficos/graficos.component';
import { GraficaEngobeComponent } from './dashboard/aplicacion-detalle/graficos/grafica-engobe/grafica-engobe.component';
import { GraficaEsmalteComponent } from './dashboard/aplicacion-detalle/graficos/grafica-esmalte/grafica-esmalte.component';

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
    TablaEngobeComponent,
    TablaEsmalteComponent,
    DatepickersComponent,
    AplicacionDetalleComponent,
    TablaComponent,
    DatepickersComponent2,
    GraficosComponent,
    GraficaEngobeComponent,
    GraficaEsmalteComponent,
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
