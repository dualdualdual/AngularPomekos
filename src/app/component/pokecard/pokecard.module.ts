import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokecardRoutingModule } from './pokecard-routing.module';
import { PokecardComponent } from './pokecard.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [PokecardComponent],
  imports: [
    CommonModule,
    PokecardRoutingModule,
    HttpClientModule
  ]
})
export class PokecardModule { }
