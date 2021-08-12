import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContadorDetalleService {

  Url = environment.baseUrl;
  headers: HttpHeaders | undefined;
  
  constructor(private http: HttpClient) { }

  select_day() {
    return this.http.get(`${this.Url}contador/select_dia.php`);
  }
  select_date(fecha: string) {
    return this.http.get(`${this.Url}contador/selectDate.php?fecha=${fecha}`);
  }
  select_between_dates(fecha1: string,fecha2: string) {
    return this.http.get(`${this.Url}contador/selectBetweenDates.php?fecha1=${fecha1}&&fecha2=${fecha2}`);
  }

}
