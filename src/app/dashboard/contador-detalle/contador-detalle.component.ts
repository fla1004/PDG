import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Contador } from '../interfaces/contador';
import { ContadorService } from '../services/contador.service';
import Swal from 'sweetalert2';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contador-detalle',
  templateUrl: './contador-detalle.component.html',
  styleUrls: ['./contador-detalle.component.css']
})

export class ContadorDetalleComponent implements OnInit {

  val;

  constructor(private contadorServicio: ContadorService,
    private router: Router) {
  }

  ngOnInit(): void {
   // this.reporte();
  }

 /* reporte(){
    
    this.val = 0;
    console.log(this.val);
   // window.open('http://localhost/PDG/server/pdf/contador/reportes_dia/reporte.php');
    
    let fecha1;
    let fecha2;
    
     // this.selectUltimosRegistros();
     
      this.contadorServicio.enviarFechaObservable.subscribe(response =>{
      
        console.log(response);
        if(response.length>10)
        {
          fecha1 = response.substring(0,10);
          fecha2 = response.substring(11,21);
  
          this.val = 1;
          console.log(this.val);
         // this.select_server_between_dates(fecha1,fecha2);
        }
        else{
          this.val = 2;
          console.log(this.val);
          console.log('http://localhost/PDG/server/pdf/contador/reporte fechas/reporte.php?fecha='+response);
        }   
      })
    }*/
}
