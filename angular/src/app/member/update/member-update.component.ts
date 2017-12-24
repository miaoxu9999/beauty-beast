import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Member} from '../member';
import {MemberService} from '../member.service';
import 'rxjs/add/operator/switchMap';



@Component({
  selector: 'app-member-update',
  templateUrl: './member-update.component.html',
  styleUrls: ['../member.component.css']
})
export class MemberUpdateComponent implements OnInit {
  member: Member;
  code=0;
  constructor(public router: Router,public memberService: MemberService, public route: ActivatedRoute) { }
  ngOnInit() {
    this.route.paramMap
      .switchMap ((params: ParamMap) => this.memberService.getMemberById(+params.get('memberId')))
      .subscribe(member => this.member = member);
  }
  cancel() {
    this.router.navigate(['/layout/member']);
  }
  save() {
      this.memberService.update(this.member).then(code => this.code = code);
      if (this.code === 0) {
        if (confirm('修改成功，是否离开本页？')) {
          this.router.navigate(['/layout/member']);
        }
      }
      else{
        alert('修改失败');
      }
  }
}
