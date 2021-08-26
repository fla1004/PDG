import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Contador } from '../../interfaces/contador';
import { ContadorService } from '../../services/contador.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  contador: Contador[]=[];

  displayedColumns: string[] = ['id','Secadero', 'Horno', 'Fecha'];
  dataSource = new MatTableDataSource(this.contador);

  constructor(private contadorServicio: ContadorService) {
  }

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
   *      Consultas
   ---------------------------------------------------------------------------------------------------*/

   selectUltimosRegistros(){
    this.contadorServicio.select_Dia().subscribe(
        (datos:any) => {
        
          this.contador = datos;
          this.dataSource = new MatTableDataSource(this.contador);
          this.dataSource.paginator = this.paginator;
        },
        (error)=>{
          console.log(error);
        }
      );
      this.contador = [];
  }

   select_server(val){ 
  
    this.contadorServicio.select_fecha(val).subscribe(
      (datos:any) => {
          this.contador = datos;
          this.dataSource = new MatTableDataSource(this.contador);
          this.dataSource.paginator = this.paginator;
      },
      (error)=>{
        console.log(error);
      }
    );  
    this.contador = [];
  }

  select_server_between_dates(val1,val2){
    this.contadorServicio.select_entre_fechas(val1,val2).subscribe(
      (datos:any) => {
        this.contador = datos;
        this.dataSource = new MatTableDataSource(this.contador);
        this.dataSource.paginator = this.paginator;
      },
      (error)=>{
        console.log(error);
      }
  );
  this.contador = [];
}

}
