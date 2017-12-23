import { Component, OnInit } from '@angular/core';

import {Member} from './member';
import {MemberService} from './member.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  headerInfo = ['学号', '姓名', '权限', '操作'];
  members: Member[];

  constructor(private memberService: MemberService, private router: Router) { }

  ngOnInit() {
     this.getMembers();
  }

  getMembers(): void {
    this.memberService.getMembers().then(members => this.members = members);
  }

  myclick() {
    if ($('.myfixed-btn>ul').attr('class') === 'show') {
      $('.myfixed-btn>ul').removeClass('show');
    } else {
      $('.myfixed-btn>ul').addClass('show');
    }
  }
  search(value: any) {
     alert(value);
  }
  editMember(memberId: any) {
    this.router.navigate(['/layout/memberupdate/' + memberId]);
  }
}

