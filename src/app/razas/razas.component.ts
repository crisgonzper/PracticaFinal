import { Component, OnInit } from '@angular/core';
import { RazasService } from '../servicio/razas.service';

@Component({
  selector: 'app-razas',
  templateUrl: './razas.component.html',
  styleUrls: ['./razas.component.css']
})
export class RazasComponent implements OnInit {

  razas:any;


  constructor(private razasService:RazasService) { 
    this.listarRazas();
  }


  ngOnInit(): void {
  }


  listarRazas():void{
    this.razasService.listarRazas().subscribe({
      next:(r) => this.razas=r,
      error:(e) => console.log(JSON.stringify(e))
      
    })
  }
 
}
