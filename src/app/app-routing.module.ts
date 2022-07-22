import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/views/login/login.component";
import {HomePageComponent} from "./views/home-page/home-page.component";
import {AuthGuard} from "./auth/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component:HomePageComponent
  },
  {
    path: "login",
    component:LoginComponent
  },
  {
    path: "list",
    loadChildren: ()=> import('./pokedex/pokedex.module').then(m=>m.PokedexModule),
    canLoad:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
