import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { FormularioService } from 'src/app/services/formulario.service';

@Component({
  selector: 'app-formuario',
  templateUrl: './formuario.component.html',
  styleUrls: ['./formuario.component.scss']
})
export class FormuarioComponent implements OnInit {
  titulo = "Registro de personas";
  nombre : string;
  apellido : string;
  correo : string;
  celular : string;
  password : string;

  listadoPersonas = new Array<Persona>();

  constructor(private formularioService: FormularioService) { } //queda inyectado... ya lo puedo utilizar

  ngOnInit(): void {
    this.formularioService.obtenerPersonas().subscribe(response => {
      this.listadoPersonas = Object.values(response)
      // console.log(response);
    })
  }
  registrar(){
    let persona = new Persona();
    persona.nombre = this.nombre;
    persona.apellido = this.apellido;
    persona.correo = this.correo;
    persona.celular = this.celular;
    persona.password = this.password;

    this.formularioService.registrarPresona(persona).subscribe(response=>{
      this.listadoPersonas.push(persona);      
    });
  }


}
