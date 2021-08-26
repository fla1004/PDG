import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { Aplicacion } from '../../interfaces/aplicacion';
import { AplicacionService } from '../../services/aplicacion.service';
import { TablaEngobeComponent } from '../tablas/tabla-engobe/tabla-engobe.component';

@Component({
  selector: 'app-datepickers',
  templateUrl: './datepickers.component.html',
  styleUrls: ['./datepickers.component.css']
})
export class DatepickersComponent implements OnInit {
  
  aplicacion : Aplicacion[] =[]; 

  dataPicker1 = new FormControl;
  dataPicker2 = new FormControl;

 /**/
  constructor(private aplicacionService : AplicacionService) { }

  ngOnInit(): void {

    this.aplicacionService.get_fecha('lknlkn'); 
  }
/***---------------------------------------------------------------------------------------------------
  *      FECHA ACTUAL
  ---------------------------------------------------------------------------------------------------*/

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

/***---------------------------------------------------------------------------------------------------
  *      GET FECHA
  ---------------------------------------------------------------------------------------------------*/

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

/***---------------------------------------------------------------------------------------------------
  *       MENSAJES ERROR
  ---------------------------------------------------------------------------------------------------*/

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


/***---------------------------------------------------------------------------------------------------
  *       CONSULTAS
  ---------------------------------------------------------------------------------------------------*/


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
        this.aplicacionService.get_fecha(val_dtp2);
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
        this.aplicacionService.get_fecha(val_dtp1);   
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

  if(dtp1.touched != false && dtp2.touched != false){
    if(val_dtp1 <= this.fecha_actual() && val_dtp2 <= this.fecha_actual()){
      if(val_dtp1 <= val_dtp2){
        let fechas = val_dtp1+"*"+val_dtp2;
        this.aplicacionService.get_fecha(fechas);    
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
