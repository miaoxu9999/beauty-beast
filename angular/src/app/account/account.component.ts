import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {

      $('.parallax').parallax();

  }
  editprofile() {
      this.router.navigate(['/layout/accountupdate']);
  }
}
