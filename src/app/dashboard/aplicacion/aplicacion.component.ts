import { Component, OnInit } from '@angular/core';
import { Aplicacion } from '../interfaces/aplicacion';
import { AplicacionService } from '../services/aplicacion.service';

@Component({
  selector: 'app-aplicacion',
  templateUrl: './aplicacion.component.html',
  styleUrls: ['./aplicacion.component.css']
})
export class AplicacionComponent implements OnInit {

  aplicacion : Aplicacion[] =[];

  constructor(private aplicacionService: AplicacionService) { }

  ngOnInit(): void {
    this.mostrar();
  }

  mostrar(){
    this.aplicacionService.mostrar().subscribe(
      (datos:any) => {
        console.log(datos);
      },
      (error)=>{
        console.log(error);
      }
      );
  }

}
