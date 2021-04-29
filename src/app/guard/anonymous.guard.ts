import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AnonymousGuard implements CanActivate {

  constructor(public router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('authToken')){
      this.router.navigateByUrl('/dashboard', {skipLocationChange: false}).then();
      return false;
    }
    return true;
  }

}
