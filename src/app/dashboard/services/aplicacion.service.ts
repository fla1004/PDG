import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AplicacionService {

  fecha: string ;

  public enviarFechaSubject= new Subject<string>();
  enviarFechaObservable = this.enviarFechaSubject.asObservable();

  Url = environment.baseUrl;
  headers: HttpHeaders | undefined;
  
  constructor(private http: HttpClient) { }

  get_fecha(fecha: string){
    this.fecha = fecha;
    this.enviarFechaSubject.next(fecha);
  }


  mostrar(){
    return this.http.get(`${this.Url}aplicacion/SelectUltimo.php`);
  }
  
  registros(){
    return this.http.get(`${this.Url}aplicacion/selectDia.php`);
  }

  select_fecha(fecha: string){
    return this.http.get(`${this.Url}aplicacion/selectFecha.php?fecha=${fecha}`);
  }

  select_entre_fechas(fecha1: string,fecha2: string) {
    return this.http.get(`${this.Url}aplicacion/selectEntreFechas.php?fecha1=${fecha1}&&fecha2=${fecha2}`);
  }

}
