import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient) { }

  getPokemons(id:number){
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${id}`)
  }
}
