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
      this.memberService.update(this.member);
  }
}
