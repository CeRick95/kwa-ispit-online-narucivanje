import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public router: Router) {}

  canActivate(): boolean {
   if ( localStorage.getItem('authToken') ) {
     return true;
    }
   localStorage.removeItem('authToken');
   this.router.navigate(['']).then(r => console.error('You dont have permission for this realm'));
   return false;
  }

}
