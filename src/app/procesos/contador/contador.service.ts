import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ContadorService {

  Url = environment.baseUrl;
  headers: HttpHeaders | undefined;
  
  constructor(private http: HttpClient) { 
  }

  mostrar(){
    return this.http.get(`${this.Url}contador/selectLast.php`);
  }
}
