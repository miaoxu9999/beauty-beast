import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['../account.component.css']
})
export class AccountUpdateComponent implements OnInit {
  constructor(public router: Router) { }
  ngOnInit() {

  }
  cancel() {
      this.router.navigate(['/layout/account']);
  }
  save() {

  }
}
