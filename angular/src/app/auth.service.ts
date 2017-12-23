import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import {HttpClient , HttpParams} from '@angular/common/http';

@Injectable()
export class AuthService {
  constructor( private http: HttpClient) { }

  redirectUrl: string;
  login(account: any, pass: any): Observable<boolean> {
    this.http.post('/api/login', null, {
      params: new HttpParams().set('account', account).set('pass', pass)
    }).subscribe(data => {
      // Read the result field from the JSON response.
      sessionStorage.setItem('isLogin', 'true');
    });
    return Observable.of(true).delay(1000).do(val => true);
  }
  logout(): void {
    sessionStorage.removeItem('isLogin');
  }
  isLogin(): Observable<boolean> {
    if (sessionStorage.getItem('isLogin') === 'true') {
      return Observable.of(true).delay(1000).do(val => true);
    }
    else{
      return Observable.of(false).delay(1000).do(val => false);
    }
  }
}
