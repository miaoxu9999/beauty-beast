import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import {HttpClient , HttpParams} from '@angular/common/http';
import {Member} from './member/member';

@Injectable()
export class AuthService {
  constructor( private http: HttpClient) { }

  account: Member;
  message: string;
  redirectUrl: string;
  login(account: any, pass: any): Observable<boolean> {
    this.http.post('/api/login', null, {
      params: new HttpParams().set('account', account).set('pass', pass)
    }).subscribe(data => {
      // Read the result field from the JSON response.
      this.message = data['msg'];
      if (this.message === '成功') {
        this.account = data['data'];
        sessionStorage.setItem('isLogin', 'true');
        sessionStorage.setItem('accountId', this.account.memberid + '');
        sessionStorage.setItem('name', this.account.name + '');
        sessionStorage.setItem('privilegeType', this.account.privilegeType + '');
      }
    });
    return Observable.of(true).delay(1000);
  }
  logout(): void {
    sessionStorage.removeItem('isLogin');
  }
  isLogin(): boolean {
    if (sessionStorage.getItem('isLogin') === 'true') {
      return true;
    }
    else{
      return false;
    }
  }
}
