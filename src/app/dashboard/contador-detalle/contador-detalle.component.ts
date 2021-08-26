import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Contador } from '../interfaces/contador';
import { ContadorService } from '../services/contador.service';
import Swal from 'sweetalert2';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-contador-detalle',
  templateUrl: './contador-detalle.component.html',
  styleUrls: ['./contador-detalle.component.css']
})

export class ContadorDetalleComponent implements OnInit {

  constructor(private contadorServicio: ContadorService) {
  }


  ngOnInit(): void {
 
  }
}
