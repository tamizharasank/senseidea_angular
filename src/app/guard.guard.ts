import { Injectable } from '@angular/core';
import { Router,CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private router: Router,
    private cookie: CookieService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (this.cookie.get('Token')) {
            // logged in so return true
        if (state.url === '/users' || state.url.split('/')[1] === 'usersView' || state.url.split('/')[1] === 'ideasView') {
          } else {
          this.cookie.set('userlist', '1');
          }
        if (state.url === '/categorylist') {
        } else {
          this.cookie.set('categorylist', '1');
        }
        if (state.url === '/ideas' || state.url.split('/')[1] === 'ideasView') {
        } else {
          this.cookie.set('ideaslist', '1');
        }
        if (state.url === '/withdrawlRequest' || state.url.split('/')[1] === 'withdrawlrequestsView') {
        } else {
          this.cookie.set('withdrawllist', '1');
        }
        if (state.url === '/transactions' || state.url.split('/')[1] === 'transactionsView') {
        } else {
          this.cookie.set('transactionslist', '1');
        }                         

            return true;
        } else {
          this.router.navigate([''], {
            queryParams: {
              return: state.url
          }
        });

        return false;
      }
    }
}
