import { Component, OnInit } from '@angular/core';
import { ContadorService } from '../../services/contador.service';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent implements OnInit {

  vector=[];
  
  constructor(private contadorServicio: ContadorService) { }

  title = 'Grafica contador';
  type = 'LineChart';  
  data;
  columnNames = ["Fecha", "Secadero", "Horno"];

  options = {
    legend: '1',
    colors: ['#FF9900', 'red'],
    series: {
      0: { lineWidth: 2 },
      1: { lineWidth: 2 },
    }
  };

  ngOnInit(): void 
  {   
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
   
    this.selectUltimosRegistros();
   
    this.contadorServicio.enviarFechaObservable.subscribe(response =>{
 
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
    for(let i=0; i<datos.length ; i++){ 
      var datos_contador = [datos[i].Fecha, Number(datos[i].Secadero), Number(datos[i].Horno)]
      this.vector[i] = datos_contador;
    } 
    this.data =  this.vector
  }


  /***---------------------------------------------------------------------------------------------------
   *      Consultas
   ---------------------------------------------------------------------------------------------------*/

  selectUltimosRegistros(){
    this.contadorServicio.select_Dia().subscribe(
      (datos:any) => {

        this.conversion(datos);
      },
      (error)=>{
        console.log(error);
      }
      ); 
      this.vector = [];
  }  

  select_server(val){ 

    this.contadorServicio.select_fecha(val).subscribe(
      (datos:any) => {
        
        this.conversion(datos);
      },
      (error)=>{
        console.log(error);
      }
    );   this.vector = [];
    
  } 

  select_server_between_dates(val1,val2){
    this.contadorServicio.select_entre_fechas(val1,val2).subscribe(
      (datos:any) => {
        this.conversion(datos);
      },
      (error)=>{
        console.log(error);
      }
  );
  this.vector = [];
}

}
