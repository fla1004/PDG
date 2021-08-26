import { Component, OnInit } from '@angular/core';
import { ContadorService } from '../services/contador.service';
import { Contador} from '../interfaces/contador';

@Component({
  selector: 'app-procesos-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
 
  contador : Contador[] =  []; 

  constructor(private contadorService: ContadorService) { }

  ngOnInit(): void 
  {   
    this.mostrar();
  }

  mostrar(){
    this.contadorService.mostrar_ultimo_registro().subscribe(
      (datos:any) => {
        this.contador = datos;
        //this.ngOnInit();
      },
      (error)=>{
        console.log(error);
      }
      ); 
  }
}
