import { Component, OnInit } from '@angular/core';
import { ContadorService } from './contador.service';
import { Contador} from '../contador-detalle/contador';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-procesos-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
 
  contador : Contador[] =  []; 

  constructor(private contadorService: ContadorService) { }

  ngOnInit(): void {
    this.mostrar();
  }

  mostrar(){
    this.contadorService.mostrar().subscribe(
      (datos:any) => {
        this.contador = datos;
      },
      (error)=>{
        console.log(error);
      }
      );
  }
}
