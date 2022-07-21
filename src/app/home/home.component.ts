import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  url ="";
  constructor() { }

  ngOnInit() {
   let random =  Math.floor(Math.random()*905)+1;
   console.log(random);
    this.url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + random + ".png";
  }

}


