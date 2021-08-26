import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Aplicacion } from 'src/app/dashboard/interfaces/aplicacion';
import { AplicacionService } from 'src/app/dashboard/services/aplicacion.service';

@Component({
  selector: 'app-tabla-esmalte',
  templateUrl: './tabla-esmalte.component.html',
  styleUrls: ['./tabla-esmalte.component.css']
})
export class TablaEsmalteComponent implements OnInit {

  aplicacion : Aplicacion[] =[]; 
  
  displayedColumns: string[] = ['id','Densidad','Temperatura','Viscosidad','Fecha'];
  dataSource = new MatTableDataSource(this.aplicacion);

  constructor(private aplicacionService: AplicacionService) { }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

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
   *      Consultas
   ---------------------------------------------------------------------------------------------------*/

   selectUltimosRegistros(){
    this.aplicacionService.registros().subscribe(
        (datos:any) => {
          for(let i=0; i<datos.length; i++){
            if(datos[i].IdSector == "2"){
              
              this.aplicacion.push(datos[i]);
            } 
          }  
          this.dataSource = new MatTableDataSource(this.aplicacion);
          this.dataSource.paginator = this.paginator;
        },
        (error)=>{
          console.log(error);
        }
      );
      this.aplicacion = [];
  }

   select_server(val){ 
  
    this.aplicacionService.select_fecha(val).subscribe(
      (datos:any) => {
        for(let i=0; i<datos.length; i++){
            if(datos[i].IdSector == "2"){
              this.aplicacion.push(datos[i]);
            } 
          }  
          this.dataSource = new MatTableDataSource(this.aplicacion);
          this.dataSource.paginator = this.paginator;
      },
      (error)=>{
        console.log(error);
      }
    );  
    this.aplicacion = [];
  }

  select_server_between_dates(val1,val2){
    this.aplicacionService.select_entre_fechas(val1,val2).subscribe(
      (datos:any) => {
      
        for(let i=0; i<datos.length; i++){
          if(datos[i].IdSector == "2"){
            this.aplicacion.push(datos[i]);
          } 
        }  
        this.dataSource = new MatTableDataSource(this.aplicacion);
        this.dataSource.paginator = this.paginator;
      },
      (error)=>{
        console.log(error);
      }
  );
  this.aplicacion = [];
}

}
