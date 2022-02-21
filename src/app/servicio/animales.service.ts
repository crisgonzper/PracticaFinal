import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalesService {

  constructor(private httpClient:HttpClient) { }


  obtenerAnimales():Observable<any> {
    return this.httpClient.get("http://localhost:3000/animales");
  }

  buscarAnimales(filtro:any):Observable<any> {
    return this.httpClient.get("http://localhost:3000/animales"+filtro);
  }
}
