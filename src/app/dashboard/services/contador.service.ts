import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ContadorService {

  fecha: string ;

  public enviarFechaSubject= new Subject<string>();
  enviarFechaObservable = this.enviarFechaSubject.asObservable();

  
  Url = environment.baseUrl;
  
  constructor(private http: HttpClient) { 
  }

  get_fecha(fecha: string){
    this.fecha = fecha;
    this.enviarFechaSubject.next(fecha);
  }

  mostrar_ultimo_registro(){
    return this.http.get(`${this.Url}contador/selectUltimo.php`);
  }

  select_Dia() {
    return this.http.get(`${this.Url}contador/selectDia.php`);
  }
  select_fecha(fecha: string) {
    return this.http.get(`${this.Url}contador/selectFecha.php?fecha=${fecha}`);
  }
  select_entre_fechas(fecha1: string,fecha2: string) {
    return this.http.get(`${this.Url}contador/selectEntreFechas.php?fecha1=${fecha1}&&fecha2=${fecha2}`);
  }
}
