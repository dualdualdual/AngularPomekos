import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly pokeApi = environment.pokeApi;

  constructor(private readonly http: HttpClient) {}

  getPokePage(offset: string, limit: string): Observable<PokePage> {
    return this.http.get<PokePage>(
      `${this.pokeApi}?offset=${offset}&limit=${limit}`
    );
  }

  getPokes(): Observable<PokePage> {
    return this.http.get<PokePage>(this.pokeApi);
  } // lista de pokemons (primera pagina)

  getPoke(id: string | number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.pokeApi}/${id}`);
  } // pokemon individual

}
