import { Component, OnInit } from '@angular/core';
import { AnimalesService } from '../servicio/animales.service';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.css']
})
export class AnimalesComponent implements OnInit {

  animales:any;
  public page!:number;

  Tipo:any;
  Nombre:any;

  filtro:any;
  constructor( private animalesService:AnimalesService) { 
this.obtenerAnimales();
  }

  ngOnInit(): void {
  }

  obtenerAnimales():void{
    this.animalesService.obtenerAnimales().subscribe({
      next:(r) => this.animales=r,
      error:(e) => console.log(JSON.stringify(e))
      
    })
  }

  buscarAnimal(Tipo:string, Nombre:string):void{

    if(Tipo!="")
    { this.filtro="?Tipo="+Tipo;}
    
    if(Nombre!="")
    {
      this.filtro=this.filtro+"&Nombre="+Nombre;
    }
  
    this.animalesService.buscarAnimales(this.filtro).subscribe({
      next:(r) => this.animales=r,
      error:(e) => console.log(JSON.stringify(e))
      
    })

  }

}
