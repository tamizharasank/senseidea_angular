import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { from, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UsersviewService {
  url = environment.Url;
  httpheaders = new HttpHeaders({
    'Content-Type': [],
    'Accept': 'application/json',
    'lang': 'jpn',
    'access_token': this.cookie.get('Token')
  });  
  constructor(private http: HttpClient,
    private cookie: CookieService) { }

  // get user
  getUserViewList(id) {
    return this.http.get(`${this.url}/getUserViewList/${id}`, {
      headers: this.httpheaders,
      observe: 'response'
    });
  }
  // get user ideas
  getUserIdeasList(id) {
    return this.http.get(`${this.url}/getUserIdeasList/${id}`, {
      headers: this.httpheaders,
      observe: 'response'
    });
  }  
}

