import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/views/login/login.component";
import {HomePageComponent} from "./views/home-page/home-page.component";

const routes: Routes = [
  {
    path: '',
    component:HomePageComponent
  },
  {
    path: "login",
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
