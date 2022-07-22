import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { HomePageComponent } from './views/home-page/home-page.component';
import {HttpClientModule} from "@angular/common/http";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {AuthModule} from "./auth/auth.module";
import { OfficialArtworkPipePipe } from './utils/pipes/official-artwork-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
  ],
  imports: [
    AuthModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    ProgressSpinnerModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})

export class AppModule{}

