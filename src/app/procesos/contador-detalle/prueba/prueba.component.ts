import { Component, OnInit } from '@angular/core';
import { Contador } from '../contador';
import { ContadorDetalleService } from '../contador-detalle.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {
  contador : Contador[] =  []; 

  title = 'Average Temperatures of Cities';
  type = 'LineChart';
  
  data = [ 
    ["Jan",  7.0, -0.2, -0.9, 3.9],
    ["Feb",  6.9, 0.8, 0.6, 4.2],
    ["Mar",  9.5,  5.7, 3.5, 5.7],
    ["Apr",  14.5, 11.3, 8.4, 8.5],
    ["May",  18.2, 17.0, 13.5, 11.9],
    ["Jun",  21.5, 22.0, 17.0, 15.2],
    ["Jul",  25.2, 24.8, 18.6, 17.0],
    ["Aug",  26.5, 24.1, 17.9, 16.6],
    ["Sep",  23.3, 20.1, 14.3, 14.2],
    ["Oct",  18.3, 14.1, 9.0, 10.3],
    ["Nov",  13.9,  8.6, 3.9, 6.6],
    ["Dec",  9.6,  2.5,  1.0, 4.8]
];

   options = {   
      hAxis: {
         title: 'Month'
      },
      vAxis:{
         title: 'Temperature'
      },
	  pointSize:5
   };
   width = 550;
   height = 400;


  constructor(private contadorDetalleServicio: ContadorDetalleService) { }

  ngOnInit(): void {
    this.select_server_day();
  }

  select_server_day(){
    this.contadorDetalleServicio.select_day().subscribe(
      (datos:any) => {
        for(let i=0; i<datos.length ; i++){ 
          var datos_contador = {
            Horno : Number(datos[i].Secadero),
            Secadero : Number(datos[i].Horno),
            Fecha: datos[i].Fecha,
        } 
          this.contador.push(datos_contador);
          
        } 
      },
      (error)=>{
        console.log(error);
      }
    );
  }
}

