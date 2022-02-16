import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RazasService {

  constructor(private httpClient:HttpClient) {

   }

   listarRazas():Observable<any> {
    return this.httpClient.get("https://api.thedogapi.com/v1/breeds");
  }

}
