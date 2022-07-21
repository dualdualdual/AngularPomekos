import { ObtenerPokemon } from './../interfaces/interfaces';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.sass']
})

export class PokedexComponent implements OnInit{
pokemons : ObtenerPokemon[] = [];
contactForm!: FormGroup;


  constructor(private readonly dsv : DataService, private readonly fb : FormBuilder, private readonly router : Router){
    this.contactForm = this.initForm();
  }

idnum=0;
num=0;
  ngOnInit(): void {
    this.dsv.getPokemons(20)
    .subscribe(res => {
      console.log(res.results);
      this.pokemons =  res.results;
       })
  }

onSubmit(){
 console.log(this.contactForm.value.cantidad);
  this.dsv.getPokemons(this.contactForm.value.cantidad)
    .subscribe(res => {
      console.log(res.results);
      this.pokemons =  res.results;
       })
}

initForm(): FormGroup {
  return this.fb.group({
    cantidad: ['', [Validators.max(100)]],
  })
}

goToCard(url:String){
  this.router.navigate(['pokecard'],{queryParams:{URL:url}});
}

}
