import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Contador } from './contador';
import { ContadorDetalleService } from './contador-detalle.service';
import Swal from 'sweetalert2';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-contador-detalle',
  templateUrl: './contador-detalle.component.html',
  styleUrls: ['./contador-detalle.component.css']
})

export class ContadorDetalleComponent implements OnInit {

  dataPicker1 = new FormControl;
  dataPicker2 = new FormControl;

  contador : Contador[] =  []; 

  displayedColumns: string[] = ['id','Secadero', 'Horno', 'Fecha'];
  dataSource = new MatTableDataSource(this.contador);

  constructor(private contadorDetalleServicio: ContadorDetalleService) {
  }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngOnInit(): void {
    this.select_server_day();
 
  }


  fecha_actual(){
    var fecha_dia = new Date().getDate();
    var fecha_mes = new Date().getMonth();
    var fecha_anio= new Date().getFullYear();

    var mes = new Array(7);
    mes [0] = "01";
    mes [1] = "02";
    mes [2] = "03";
    mes [3] = "04";
    mes [4] = "05";
    mes [5] = "06";
    mes [6] = "07";
    mes [7] = "08";
    mes [8] = "09";
    mes [9] = "10";
    mes [10] = "11";
    mes [11] = "12";

    let fechaActual = (fecha_anio+"-"+mes[fecha_mes] +"-"+fecha_dia );

    return(fechaActual);
  }

  conver_val_dtp1(){
     let dtp1 = this.dataPicker1;
     let string_dptp1 = JSON.stringify(dtp1);
     const value_dtp1  = JSON.parse(string_dptp1);

     return(value_dtp1);
  }

  conver_val_dtp2(){
    let dtp2 = this.dataPicker2;
    let string_dptp2= JSON.stringify(dtp2);
    const value_dtp2  = JSON.parse(string_dptp2);

    return(value_dtp2);
 }

  msg_error_consulta_fecha(){
    return( 
      Swal.fire({
          icon: 'error',
          title: 'Esta solicitando registros mayor a la fecha actual',
          text: 'Porfavor ingrese bien los datos!',
        })
    );
  }

  msg_error_fechas_vacias(){
    return( 
      Swal.fire({
          icon: 'error',
          title: 'Fechas vacias',
          text: 'Porfavor ingrese bien los datos!',
        })
    );
  }

  msg_error_fecha_desde_mayor(){
    return( 
      Swal.fire({
          icon: 'error',
          title: 'Las fechas no concuerdan',
          text: 'Porfavor ingrese bien los datos!',
        })
    );
  }

  select_server_day(){
    
    this.contadorDetalleServicio.select_day().subscribe(
      (datos:any) => {
        this.contador = datos;        
        this.dataSource = new MatTableDataSource(this.contador);
        this.dataSource.paginator = this.paginator;
      },
      (error)=>{
        console.log(error);
      }
  );
  }
  
  select_server(val){
    this.contadorDetalleServicio.select_date(val).subscribe(
      (datos:any) => {
        this.contador = datos;
        this.dataSource = new MatTableDataSource(this.contador);
        this.dataSource.paginator = this.paginator;
      },
      (error)=>{
        console.log(error);
      }
  );
  }

  select_server_between_dates(val1,val2){
      this.contadorDetalleServicio.select_between_dates(val1,val2).subscribe(
        (datos:any) => {
          this.contador = datos;
          this.dataSource = new MatTableDataSource(this.contador);
          this.dataSource.paginator = this.paginator;  
        },
        (error)=>{
          console.log(error);
        }
    );
  }
  
  consulta(){

    let dtp1 = this.dataPicker1;
    let dtp2 = this.dataPicker2;

    let val_dtp1 = this.conver_val_dtp1();
    let val_dtp2 = this.conver_val_dtp2();

   
    /***
     * dtp1 sin seleccionar
     * */
    if(dtp1.touched == false)
    {
      if(val_dtp2 > this.fecha_actual())
      {
       this.msg_error_consulta_fecha()
      }
      else{
        this.select_server(val_dtp2);
      }
    }

    /***
     * dtp2 sin seleccionar
     * */
    if(dtp2.touched == false)
    {
      if(val_dtp1 > this.fecha_actual())
      {
        this.msg_error_consulta_fecha();
      }
      else{
        this.select_server(val_dtp1);
      }
    }

    /***
     * Fechas vacias
     */
    if(dtp1.touched == false && dtp2.touched == false){
      this.msg_error_fechas_vacias();
    }
      
    /**
     * Fechas seleccionadas
     */

    
    if(dtp1.touched != false && dtp2.touched != false)
    {
      if(val_dtp1 <= this.fecha_actual() && val_dtp2 <= this.fecha_actual()){
        if(val_dtp1 <= val_dtp2){
          this.select_server_between_dates(val_dtp1,val_dtp2);
        }
        else{
          this.msg_error_fecha_desde_mayor()
        }
       }
      else{
        this.msg_error_consulta_fecha();
      }
    }
  }
}
