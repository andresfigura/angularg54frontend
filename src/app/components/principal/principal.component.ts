import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  contenido1 : string;
  constructor() {
    this.contenido1 = "Este es el contenido de la columna 1";
   }

  ngOnInit(): void {
  }
  escribir(evento : any){
    this.contenido1 = evento.target.value
  }
}
