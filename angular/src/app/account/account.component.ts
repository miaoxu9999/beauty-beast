import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MemberService} from "../member/member.service";
import {Member} from "../member/member";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  member: Member;
  constructor(public router: Router, private memberService: MemberService) { }

  ngOnInit() {

      $('.parallax').parallax();
      //调用memberservice
    console.log(sessionStorage.getItem("accountId"));
  this.memberService.getMemberById(sessionStorage.getItem("accountId")).then(member => this.member = member);
//alert(this.member);
  }
  editprofile() {
      this.router.navigate(['/layout/accountupdate']);
  }
}
