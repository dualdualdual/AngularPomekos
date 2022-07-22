import { Component, OnInit } from '@angular/core';
import {Pokemon, PokemonList} from "../../../interfaces";
import {HttpClient} from "@angular/common/http";
import {forkJoin, map, mergeMap, Observable, tap} from "rxjs";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  constructor(private http : HttpClient) { }

  pokemons ?: Pokemon[]
  response ?: PokemonList
  limit : number = 30

  ngOnInit(): void {
    this.http.get<PokemonList>(`https://pokeapi.co/api/v2/pokemon?limit=${this.limit}`)
      .pipe(
        tap(data => this.response = data),
        mergeMap<PokemonList , Observable<Pokemon[]>>( ({results})=> forkJoin<Pokemon[]>( results.map(result=> this.http.get<Pokemon>(result.url))))
      ).subscribe(data=> this.pokemons = data)
  }

}
