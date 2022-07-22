import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../../services/pokemon.service";
import {Pokemon, Result} from "../../interfaces";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

  pokemonSprite : string | undefined ="";
  pokemon ?: string
  isLoading : boolean

  constructor(private pokemonservice : PokemonService) {
    this.isLoading = true;
    this.pokemonservice.getCountPokemon().subscribe(data=>{
      this.pokemonservice.getPokemon(data.count).subscribe(data=>{
        this.pokemonservice.getPokemonSprite(data.results?.shift()?.url).subscribe(data=>{
          this.pokemonSprite = data.sprites.other?.
         ["official-artwork"].front_default;
          this.pokemon = data.name
          this.isLoading = false
        })
      })
    });
  }

  ngOnInit(): void {

  }



}
