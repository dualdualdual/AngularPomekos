import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexRoutingModule } from './pokedex-routing.module';
import {ListComponent} from "./views/list/list.component";
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import {HttpClientModule} from "@angular/common/http";
import {AppModule} from "../app.module";
import {UtilsModule} from "../utils/utils.module";


@NgModule({
  declarations: [
    ListComponent,
    PokeCardComponent
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    HttpClientModule,
    UtilsModule
  ]
})
export class PokedexModule { }
