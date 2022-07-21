import { PokecardComponent } from './component/pokecard/pokecard.component';
import { HomeComponent } from './home/home.component';

import { PokedexComponent } from './pokedex/pokedex.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserguardGuard } from 'src/guard/userguard.guard';

const routes: Routes = [
  {path:'', redirectTo:"/home", pathMatch:'full'},
  {path:'home', component:  HomeComponent},
  {path:'login', component:  LoginComponent},
  {path:'pokedex', component:  PokedexComponent,canActivate:[UserguardGuard]},
  {path: 'pokecard', component: PokecardComponent,canActivate:[UserguardGuard]}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}
