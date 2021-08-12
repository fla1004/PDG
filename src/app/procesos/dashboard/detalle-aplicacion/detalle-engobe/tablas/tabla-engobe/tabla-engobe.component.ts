import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Aplicacion } from 'src/app/procesos/dashboard/interfaces/aplicacion';
import { AplicacionService } from 'src/app/procesos/dashboard/services/aplicacion.service';

@Component({
  selector: 'app-tabla-engobe',
  templateUrl: './tabla-engobe.component.html',
  styleUrls: ['./tabla-engobe.component.css']
})
export class TablaEngobeComponent implements OnInit {

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
    this.aplicacionService.DiaEngobe().subscribe(
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
