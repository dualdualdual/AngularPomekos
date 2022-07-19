import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pokemon, PokemonList} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http : HttpClient) { }

  getCountPokemon()  {
    return this.http.get<PokemonList>("https://pokeapi.co/api/v2/pokemon?limit=1")
  }

  getPokemon(count: number = 0){
    let id = Math.floor(Math.random() * count +1) ;
    return this.http.get <PokemonList>(`https://pokeapi.co/api/v2/pokemon?limit=1&offset=${id-1}`)
  }

  getPokemonSprite(url : string | undefined = "https://pokeapi.co/api/v2/pokemon/ditto"){
    return this.http.get<Pokemon>(url);
  }
}
