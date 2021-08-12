import { Component, OnInit } from '@angular/core';
import { Aplicacion } from '../../interfaces/aplicacion';
import { AplicacionService } from '../../services/aplicacion.service';

@Component({
  selector: 'app-esmalte',
  templateUrl: './esmalte.component.html',
  styleUrls: ['./esmalte.component.css']
})
export class EsmalteComponent implements OnInit {

  aplicacion : Aplicacion[] =[];

  constructor(private aplicacionService: AplicacionService) { }

  ngOnInit(): void {
    this.mostrar();
  }

  mostrar(){
    this.aplicacionService.mostrar().subscribe(
      (datos:any) => {
        this.aplicacion = datos;
      },
      (error)=>{
        console.log(error);
      }
      );
  }

}
