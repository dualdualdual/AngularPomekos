import { Injectable } from '@angular/core';
import {User} from "../../interfaces";
import {HttpClient} from "@angular/common/http";
import {flatMap, lastValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user ?: User
  islogged ?: boolean = false;

  constructor(private http : HttpClient) { }

  async login(username : string , password : string){
    let responseUser  = await lastValueFrom(this.http.get<User[]>(`https://62d5b53c15ad24cbf2cc372d.mockapi.io/api/v1/users?name=${username}`))

    return responseUser
  }



}
