import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path:'', redirectTo:"/home", pathMatch:'full'},
  {path:'home', component:  HomeComponent},
  {path:'login', component:  LoginComponent},
  {path:'pokedex', loadChildren: ()=> import('./pokedex/pokedex.module').then(m => m.PokedexModule)},
  {path: 'pokecard', loadChildren: ()=> import('./component/pokecard/pokecard.module').then(m => m.PokecardModule)}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}
