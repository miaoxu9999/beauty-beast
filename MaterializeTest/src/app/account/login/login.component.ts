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
    this.setMessage();
  }

  ngOnInit() {
  }

  setMessage() {
    this.message = 'Logged' + (this.authService.isLogin() ? 'in' : 'out' );
  }
  login(username: any, password: any) {
    this.message = 'Trying to log in...';
    this.authService.login(username, password).subscribe(() => {
      this.setMessage();
      if (this.authService.isLogin()) {
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/layout';
        this.router.navigate([redirect]);
      }
    });
  }
  logout() {
    this.authService.logout();
    this.setMessage();
  }
}
