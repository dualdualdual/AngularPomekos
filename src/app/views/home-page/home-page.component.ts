import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../../services/pokemon.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

  pokemonSprite : string | undefined ="";

  constructor(private pokemonservice : PokemonService) { }

  ngOnInit(): void {
    this.pokemonservice.getCountPokemon().subscribe(data=>{
      this.pokemonservice.getPokemon(data.count).subscribe(data=>{
        this.pokemonservice.getPokemonSprite(data.results?.shift()?.url).subscribe(data=>{
          console.log(data.sprites.frontDefault)
          this.pokemonSprite = data.sprites.frontDefault;
        })
      })
    });
  }



}
