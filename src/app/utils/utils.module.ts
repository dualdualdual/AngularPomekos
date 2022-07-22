import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OfficialArtworkPipePipe} from "./pipes/official-artwork-pipe.pipe";



@NgModule({
  declarations: [
    OfficialArtworkPipePipe,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    OfficialArtworkPipePipe
  ]
})
export class UtilsModule { }
