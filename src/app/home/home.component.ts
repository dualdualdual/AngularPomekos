import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokemon!: Pokemon;
  pokeId!: string | number;

  generateRandomId(){

    return Math.floor(Math.random() * 905)+1;

  }

  constructor(private readonly pokeServ: PokemonService) { }

  ngOnInit(): void {
    
    this.pokeId=(this.generateRandomId());
    this.pokeServ.getPoke(this.pokeId).subscribe(poke => {this.pokemon = poke})

  }

}
