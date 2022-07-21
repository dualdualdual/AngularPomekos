import { Pokemon } from './../../interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-pokecard',
  templateUrl: './pokecard.component.html',
  styleUrls: ['./pokecard.component.sass']
})
export class PokecardComponent implements OnInit {
  URL!:string;
  pokemon !: Pokemon;
  constructor(private readonly route: ActivatedRoute,private readonly dsv : DataService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params:Params) => {
        this.URL = params['URL'];
      });

     this.dsv.getInfoPokemon(this.URL).subscribe(
      res => {
        console.log(res);
        this.pokemon =  res;
         })
    }

}
