import { PokedexComponent } from './pokedex.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexRoutingModule } from './pokedex-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PokedexComponent
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class PokedexModule { }
