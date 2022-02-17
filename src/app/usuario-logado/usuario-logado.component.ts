import { Component, OnInit } from '@angular/core';
import { UsuarioLogadoService } from '../servicio/usuario-logado.service';

@Component({
  selector: 'app-usuario-logado',
  templateUrl: './usuario-logado.component.html',
  styleUrls: ['./usuario-logado.component.css']
})
export class UsuarioLogadoComponent implements OnInit {

  usuarioLogado:any;

  constructor(private usuarioLogadoService:UsuarioLogadoService) { 
    this.obtenerUsuarioLogado();
  }

  ngOnInit(): void {
  }

  obtenerUsuarioLogado():void {
    this.usuarioLogadoService.obtenerUsuarioLogado().subscribe({
      next:(r) => this.usuarioLogado=r,
      error:(e) => console.log(JSON.stringify(e))
      
    })
  }
  

}
