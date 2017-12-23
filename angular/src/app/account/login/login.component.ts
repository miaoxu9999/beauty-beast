import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;
  constructor(public authService: AuthService, public router: Router) {
  }

  ngOnInit() {
    if(this.authService.isLogin()){
      this.router.navigate(['/layout']);
    }
  }
  // login(username: any, password: any) {
  //   this.message = 'Trying to log in...';
  //   this.authService.login(username, password).subscribe(() => {
  //     if (this.authService.isLogin()) {
  //       let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/layout';
  //       this.router.navigate([redirect]);
  //     }
  //   });
  // }
  login(username: any, password: any) {
    this.message = 'Trying to log in...';
    this.authService.login(username, password).subscribe(() => {
      if (this.authService.isLogin()) {

        this.router.navigate(['/layout']);
      }
      else {
        alert('登录失败');
      }
    });
  }
  logout() {
    this.authService.logout();
  }

}
