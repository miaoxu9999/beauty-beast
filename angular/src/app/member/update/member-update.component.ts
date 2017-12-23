import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-member-update',
  templateUrl: './member-update.component.html',
  styleUrls: ['../member.component.css']
})
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
