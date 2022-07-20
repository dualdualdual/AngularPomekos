import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly pokeApi = environment.pokeApi;

  constructor(private readonly http: HttpClient) { }

getPokes():Observable<Pokemon[]>{
  return this.http.get<Pokemon[]>(this.pokeApi);
} // lista de pokemons

getPoke(id:string):Observable<Pokemon>{
  return this.http.get<Pokemon>(`${this.pokeApi}/${id}`);
} // pokemon individual

}
