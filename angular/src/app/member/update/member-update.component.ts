import {OnInit} from '@angular/core';
import {Router} from '@angular/router';

export class MemberUpdateComponent implements OnInit {
  constructor(public router: Router) { }
  ngOnInit() {

  }
  cancel() {
    this.router.navigate(['/layout/member']);
  }
  save() {

  }
}
