import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioLogadoService {

  constructor(private httpClient:HttpClient) { 
    
  }

  obtenerUsuarioLogado():Observable<any> {
    return this.httpClient.get("http://localhost:3000/usuarioLogado/1");
  }

}


