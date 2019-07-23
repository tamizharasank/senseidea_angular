import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { from, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  httpheaders = new HttpHeaders({
    'Content-Type': [],
    'Accept': 'application/json',
    'lang': 'jpn',    
    'access_token': this.cookie.get('Token')
  });

  url = environment.Url;
  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
  constructor(private http: HttpClient,
    private cookie: CookieService) { }
  // Users List View
  usersListView(page) {
    return this.http.get(`${this.url}/usersList/${page}`, {
      headers: this.httpheaders,
      observe: 'response'
    });
  }
  // User search data List View
  usersearchdataView(name) {
    return this.http.get(`${this.url}/AdminUsersSearchData/${JSON.stringify(name)}`, {
      headers: this.httpheaders,
      observe: 'response'
    });
  }
}
