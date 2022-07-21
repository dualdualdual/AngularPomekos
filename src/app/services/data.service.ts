import { ResPokemon } from './../interfaces/interfaces';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { ObtenerPokemon, Pokemon } from '../interfaces/interfaces';
import { Login } from '../login/login.component';


@Injectable({
  providedIn:'root'
})

export class DataService{
  private readonly API = 'https://pokeapi.co/api/v2/pokemon';
  private readonly USERS = 'https://62d5b53c15ad24cbf2cc372d.mockapi.io/api/v1/users'

  constructor(private readonly http:HttpClient){}

  getPokemons(num:Number):Observable<ResPokemon>{
    if(num==null || num>0){
      return this.http.get<ResPokemon>(this.API + "?limit=" + num);
    }else{
      return this.http.get<ResPokemon>(this.API);
    }
  }

  getInfoPokemon(url:string):Observable<Pokemon>{
    return this.http.get<Pokemon>(url);
  }

  getUsers():Observable<Login[]>{
    return this.http.get<Login[]>(this.USERS);
  }
}
