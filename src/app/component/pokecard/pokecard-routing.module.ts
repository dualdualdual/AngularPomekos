import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserguardGuard } from 'src/guard/userguard.guard';
import { PokecardComponent } from './pokecard.component';

const routes: Routes = [
  {path: '', component: PokecardComponent,canActivate:[UserguardGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokecardRoutingModule { }
