import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import{AuthService} from './auth.service'
import { UserService } from './user.service';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService ,private router:Router,private user:UserService){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.auth.isloggedIn){

        return true;
      }
    return this.user.isloggedIn().pipe(map(res=>{
      if(res.status)
      {
        this.auth.setLoggedIn(true)
        return true

      }
      else{
        this.router.navigate(['login'])
        return false
      }

    }))
  }
  
}
