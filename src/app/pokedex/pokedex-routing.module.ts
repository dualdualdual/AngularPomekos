import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserguardGuard } from 'src/guard/userguard.guard';
import { PokecardComponent } from '../component/pokecard/pokecard.component';
import { PokedexComponent } from './pokedex.component';

const routes: Routes = [
  {path:'', component:  PokedexComponent,canActivate:[UserguardGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexRoutingModule { }
