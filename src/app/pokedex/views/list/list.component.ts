import { Component, OnInit } from '@angular/core';
import {Pokemon, PokemonList} from "../../../interfaces";
import {HttpClient} from "@angular/common/http";
import {forkJoin, map, mergeMap, tap} from "rxjs";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  constructor(private http : HttpClient) { }

  pokemons ?: Pokemon[]

  limit : number = 30

  ngOnInit(): void {
    this.http.get<PokemonList>(`https://pokeapi.co/api/v2/pokemon?limit=${this.limit}`)
      .pipe(
        mergeMap( ({results})=> forkJoin( results.map(result=> this.http.get(result.url))))
      ).subscribe(data=> console.log(data))
  }

}
