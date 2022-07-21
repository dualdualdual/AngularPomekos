import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
})
export class PokedexComponent implements OnInit {
  page!: PokePage;
  pokes!: Result[];

  setPage() {
    this.pokeServ.getPokePage('0', '20').subscribe((pokepage) => {
      this.page = pokepage;
      this.pokes = this.page.results;
    });
  }

  constructor(private readonly pokeServ: PokemonService) {}

  ngOnInit(): void {
    this.setPage();
  }
}
