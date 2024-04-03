import { CanActivateFn, Router } from '@angular/router';
import {Injectable} from '@angular/core'

@Injectable()
export class AuthGuard {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('Token')) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  }




export const authGuardGuard: CanActivateFn = (route, state) => {
  return true;
};
