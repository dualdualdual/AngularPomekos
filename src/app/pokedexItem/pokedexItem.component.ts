import { Component, Input, OnInit } from '@angular/core';
import { ShareReplayConfig } from 'rxjs';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokedexItem',
  templateUrl: './pokedexItem.component.html',
  styleUrls: ['./pokedexItem.component.css'],
})
export class PokedexItemComponent implements OnInit {
  @Input() poke!: Result;
  pokeId!: string;
  pokemon!: Pokemon;

  setPokeid() {
    let pokeUrl = this.poke.url;
    let urlArray = pokeUrl.split('/');
    this.pokeId = urlArray[urlArray.length-2];
    console.log(this.pokeId);
  }

  setPoke() {
    this.pokeServ.getPoke(this.pokeId).subscribe((p) => {
      this.pokemon = p;
    });
  }

  constructor(private readonly pokeServ: PokemonService) {}

  ngOnInit() {
    this.setPokeid();
    this.setPoke();
  }
}
