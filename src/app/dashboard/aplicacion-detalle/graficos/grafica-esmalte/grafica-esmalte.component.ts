import { Component, OnInit } from '@angular/core';
import { Aplicacion } from 'src/app/dashboard/interfaces/aplicacion';
import { AplicacionService } from 'src/app/dashboard/services/aplicacion.service';

@Component({
  selector: 'app-grafica-esmalte',
  templateUrl: './grafica-esmalte.component.html',
  styleUrls: ['./grafica-esmalte.component.css']
})
export class GraficaEsmalteComponent implements OnInit {

  aplicacion : Aplicacion[] =[]; 
  vector=[];

  constructor(public aplicacionService: AplicacionService) { }

  title = 'googlechart';
  type = 'LineChart';  
  data;
  columnNames = ["Fecha", "Densidad", "Temperatura", "Viscosidad"];


  ngOnInit(): void {
    if(this.get_fecha() == undefined){
      this.selectUltimosRegistros();
    }
    else{
      this.get_fecha();
    }
  
  }

  /***---------------------------------------------------------------------------------------------------
   *      Get Fecha 
   ---------------------------------------------------------------------------------------------------*/

   get_fecha(){

    let fecha1;
    let fecha2;
      
    this.aplicacionService.enviarFechaObservable.subscribe(response =>{
 
      if(response.length>10)
      {
        fecha1 = response.substring(0,10);
        fecha2 = response.substring(11,21);

        this.select_server_between_dates(fecha1,fecha2);
      }
      else{
        this.select_server(response);
      }    
    })
  }
  /***---------------------------------------------------------------------------------------------------
   *      Procesamiento vector a graficos
   ---------------------------------------------------------------------------------------------------*/

   conversion(datos){
    for(let i=0; i<datos.length; i++){
      if(datos[i].IdSector == "2"){
        this.aplicacion.push(datos[i]);
      } 
    } 

    for(let i=0; i<this.aplicacion.length; i++){
      var datos_contador = [ this.aplicacion[i].Fecha, 
                              Number(this.aplicacion[i].Densidad), 
                              Number(this.aplicacion[i].Temperatura), 
                              Number(this.aplicacion[i].Viscosidad)]
      this.vector[i] = datos_contador;
    }
    this.data=  this.vector;
  }

   /***---------------------------------------------------------------------------------------------------
   *      Consultas
   ---------------------------------------------------------------------------------------------------*/
   selectUltimosRegistros(){
    this.aplicacionService.registros().subscribe(
      (datos:any) => {
      
         this.conversion(datos);
    },
      (error)=>{
        console.log(error);
      }
      ); 
      this.vector = [];
      this.aplicacion = [];
  }  

  select_server(val){ 

    console.log(val);
    this.aplicacionService.select_fecha(val).subscribe(
      (datos:any) => {

        this.conversion(datos);

      },
      (error)=>{
        console.log(error);
      }
    );    
    this.vector = [];
    this.aplicacion = [];
    
  } 

  select_server_between_dates(val1,val2){
    
    this.aplicacionService.select_entre_fechas(val1,val2).subscribe(
      (datos:any) => {
        
        this.conversion(datos);

      },
      (error)=>{
        console.log(error);
      }
  );
  this.vector = [];
  this.aplicacion = [];
 }

}
