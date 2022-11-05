import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  url = "http://localhost:3001/personas"

  constructor(private http : HttpClient) { }

  obtenerPersonas(){
    return this.http.get(this.url);
  }

  registrarPresona(persona : Persona){
    return this.http.post(this.url, persona);
  }

}
