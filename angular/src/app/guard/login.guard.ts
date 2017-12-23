import {CanActivate} from '@angular/router';
import {HttpClient} from '@angular/common/http';

export class LoginGuard implements CanActivate {
  logined: boolean;
  constructor(private http: HttpClient) {}
  canActivate() {
    this.http.get('../../assets/account/isLogined.json').subscribe(data => {
      // Read the result field from the JSON response.
      this.logined = data['results'];
    });

    //  this.logined = Math.random() < 0.5;
    if (!this.logined) {
      console.log('用户未登录');
    }
    return this.logined;
  }

}
