import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Member} from '../../member/member';
import {MemberService} from '../../member/member.service';

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['../account.component.css']
})
export class AccountUpdateComponent implements OnInit {
  member = new Member();
  code= 0;
  constructor(public router: Router, public memberservice: MemberService) { }
  ngOnInit() {
      this.member.memberid = parseInt(sessionStorage.getItem('accountId'));
      this.memberservice.getMemberById(this.member.memberid).then(data => this.member = data);
  }
  cancel() {
      this.router.navigate(['/layout/account']);
  }

  save() {
    this.memberservice.update(this.member).then(code => this.code = code);
    if (this.code === 0) {
      if (confirm('修改成功，是否离开本页？')) {
        this.router.navigate(['/layout/account']);
      }
    }
    else{
      alert('修改失败');
    }
  }
}
