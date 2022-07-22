import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../../../interfaces";

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.sass']
})
export class PokeCardComponent implements OnInit {

  @Input()
  pokemon !: Pokemon

  constructor() { }

  ngOnInit(): void {
    console.log(this.pokemon.name)
  }

}
