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
anterior!:string;
siguiente!:string;

  ngOnInit(): void {
    this.dsv.getPokemonsByMax(20)
    .subscribe(res => {
      console.log(res.results);
      this.pokemons =  res.results;
      this.setAnteriorSiguente(res.previous,res.next);
       })
  }

onSubmit(){
 console.log(this.contactForm.value.cantidad);
  this.dsv.getPokemonsByMax(this.contactForm.value.cantidad)
  .subscribe(res => {
      console.log(res.results);
      this.pokemons =  res.results;
      this.setAnteriorSiguente(res.previous,res.next);
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

irAnterior(){
  this.dsv.getPokemonsByurl(this.anterior)
  .subscribe(res => {
      console.log(res.results);
      this.pokemons =  res.results;
      this.setAnteriorSiguente(res.previous,res.next);
       })
}
irSiguiente(){
  this.dsv.getPokemonsByurl(this.siguiente)
  .subscribe(res => {
      console.log(res.results);
      this.pokemons =  res.results;
      this.setAnteriorSiguente(res.previous,res.next);
       })
}

setAnteriorSiguente(anterior:string|null,siguiente:string){
if(anterior!=null){
  this.anterior = anterior;
}
this.siguiente = siguiente;
}

}
