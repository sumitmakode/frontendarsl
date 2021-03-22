import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SigninService } from './signin.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGaurd implements CanActivate{
  constructor(private authService: SigninService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): boolean  | Observable<boolean>  | Promise<boolean> {
       var isAuth = this.authService.getIsAuth();
 console.log(typeof(isAuth));
      if (!isAuth)
       {
       this.router.navigate(['/']);
      }

      return isAuth;

  }


}
