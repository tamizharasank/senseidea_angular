import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = environment.Url;
  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
  httpheaders = new HttpHeaders({
    'Content-Type': [],
    'Accept': 'application/json',
    'lang': 'jpn'
  });  
  constructor(private http: HttpClient) { }

  static login_authentication(data: { email: any; password: any; }): any {
    throw new Error("Method not implemented.");
  }

  login_authentication(data) {
    return this.http.post(`${this.url}/login`, data, {
      headers: this.httpheaders,
      observe: 'response'
    });
  }
}