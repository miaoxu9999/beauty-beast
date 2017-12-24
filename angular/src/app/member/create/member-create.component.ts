import {Component, OnInit} from '@angular/core';
import {MemberService} from '../member.service';
import {Router} from '@angular/router';
import {Member} from '../member';

@Component({
  selector: 'app-member-create',
  templateUrl: './member-create.component.html',
  styleUrls: ['../member.component.css']
})
export class MemberCreateComponent implements OnInit {

  member = new  Member();
  constructor(public router: Router,public memberService: MemberService) { }
  ngOnInit(){
  }
  save(){
    alert(JSON.stringify(this.member));
  }
}
