import { Component, OnInit } from '@angular/core';
import { Aplicacion } from '../../interfaces/aplicacion';
import { AplicacionService } from '../../services/aplicacion.service';

@Component({
  selector: 'app-engobe',
  templateUrl: './engobe.component.html',
  styleUrls: ['./engobe.component.css']
})
export class EngobeComponent implements OnInit {

  aplicacion : Aplicacion[] =[];

  constructor(private aplicacionService: AplicacionService) { }

  ngOnInit(): void {
    this.mostrar();
  }

  mostrar(){
    this.aplicacionService.mostrar().subscribe(
      (datos:any) => {
        this.aplicacion = datos;
        //this.ngOnInit();
      },
      (error)=>{
        console.log(error);
      }
      );
  }
}
