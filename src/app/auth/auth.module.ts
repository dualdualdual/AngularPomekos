import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './views/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ChipsModule} from "primeng/chips";
import {InputTextModule} from "primeng/inputtext";



@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChipsModule,
    FormsModule,
    InputTextModule
  ]
})
export class AuthModule { }
