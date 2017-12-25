import {Component, OnInit} from '@angular/core';
import {MemberService} from '../member.service';
import {Router} from '@angular/router';
import {Member} from '../member';

@Component({
  selector: 'app-member-create',
  templateUrl: '../update/member-update.component.html',
  styleUrls: ['../member.component.css']
})
export class MemberCreateComponent implements OnInit {
  code=0;
  member = new  Member();
  constructor(public router: Router,public memberService: MemberService) { }
  ngOnInit(){
  }

  save() {
    this.memberService.create(this.member).then(code => this.code = code);
    if (this.code === 0) {
      if (confirm('增加成功，是否离开本页？')) {
        this.router.navigate(['/layout/member']);
      }
    }
    else{
      alert('增加失败');
    }
  }
  cancel() {
    this.router.navigate(['/layout/member']);
  }
}
