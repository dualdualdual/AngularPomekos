import { Home } from './../app/interfaces/interfaces';
import { Login } from './../app/login/login.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserguardGuard implements CanActivate {
  constructor(private readonly router : Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    )
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.hasUser()){
      return true;
    }else{
    this.router.navigate(['login']);
    return false;
  }
  }

  hasUser(){
   if(sessionStorage.getItem('usuario') != null){
    return true;
   }
   return false;
  }


}
