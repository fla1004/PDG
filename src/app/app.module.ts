import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { DashboardComponent } from './procesos/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ContadorComponent } from './procesos/contador/contador.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { ContadorDetalleComponent } from './procesos/contador-detalle/contador-detalle.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { PruebaComponent } from './procesos/contador-detalle/prueba/prueba.component';

import { GoogleChartsModule } from 'angular-google-charts';
import { AplicacionComponent } from './procesos/dashboard/aplicacion/aplicacion.component';
import { EngobeComponent } from './procesos/dashboard/aplicacion/engobe/engobe.component';
import { EsmalteComponent } from './procesos/dashboard/aplicacion/esmalte/esmalte.component';
import { DetalleAplicacionComponent } from './procesos/dashboard/detalle-aplicacion/detalle-aplicacion.component';
import { DetalleEngobeComponent } from './procesos/dashboard/detalle-aplicacion/detalle-engobe/detalle-engobe.component';
import { TablaEngobeComponent } from './procesos/dashboard/detalle-aplicacion/detalle-engobe/tablas/tabla-engobe/tabla-engobe.component';
import { TablaEsmalteComponent } from './procesos/dashboard/detalle-aplicacion/detalle-engobe/tablas/tabla-esmalte/tabla-esmalte.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ContadorComponent,
    ContadorDetalleComponent,
    PruebaComponent,
    AplicacionComponent,
    EngobeComponent,
    EsmalteComponent,
    DetalleAplicacionComponent,
    DetalleEngobeComponent,
    TablaEngobeComponent,
    TablaEsmalteComponent
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
