import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Aplicacion } from 'src/app/procesos/dashboard/interfaces/aplicacion';
import { AplicacionService } from 'src/app/procesos/dashboard/services/aplicacion.service';

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
    this.selectUltimosRegistros();
  }

  selectUltimosRegistros(){
    this.aplicacionService.DiaEsmalte().subscribe(
        (datos:any) => {
          console.log(datos);
          this.dataSource = new MatTableDataSource(datos);
          this.dataSource.paginator = this.paginator;
        },
        (error)=>{
          console.log(error);
        }
      );
  }


}
