import { Component, OnInit } from '@angular/core';

import {Member} from './member';
import {MemberService} from './member.service';
import {Router} from '@angular/router';
import {Page} from './page';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  headerInfo = ['学号', '姓名', '权限', '操作'];
  members: Member[];
  code = 0;
  //分页
  page = 0;
  pre = false;
  next = true;
  size = 5;
  pages: Page[]=[];
  totalPages = 0;
  constructor(private memberService: MemberService, private router: Router) { }

  ngOnInit() {
     //this.getMembers();
    this.getMembersByPage(this.page);
  }

  getMembers(): void {
    this.memberService.getMembers().then(members => this.members = members);
  }
  getMembersByPage(page: any): void {
    this.page = page;
    this.memberService.getMembersByPage(page, this.size).then(data => {
      this.members = data['content'];
      this.totalPages = data['totalPages'];
      this.initPages();
      this.pageManager();

  });
  }
  pageManager(){
    if (this.page === 0) {
      this.pre = false;
    }else{
      this.pre = true;
    }
    if (this.page < this.totalPages - 1) {
      this.next = true;
    }else{
      this.next = false;
    }
  }
  initPages(){
    for(let i=0;i<this.totalPages;i++){
      this.pages[i] = new Page();
      this.pages[i].pageNum = i;
      if (i === this.page){
        this.pages[i].pageStatus = 'active';
      }
      else {
        this.pages[i].pageStatus = 'waves-effect';
      }
    }

  }
  myclick() {
    if ($('.myfixed-btn>ul').attr('class') === 'show') {
      $('.myfixed-btn>ul').removeClass('show');
    } else {
      $('.myfixed-btn>ul').addClass('show');
    }
  }
  search(value: any) {
    this.memberService.search(value).then(members => this.members = members);
  }
  editMember(memberId: any) {
    this.router.navigate(['/layout/memberupdate/' + memberId]);
  }
  select(memberid: number){
    if($("#" + memberid).attr('class') === 'selected'){
      $("#" + memberid).removeClass('selected');
    }else{
      $("#" + memberid).addClass("selected");
    }

  }
  delete(){
    const selectEl = $('.selected');

    for ( let i = 0 ; i < selectEl.length; i++){
          this.memberService.delete(selectEl.eq(i).attr('id')).then(code => this.code = this.code + code );
    }
    if (this.code > 0) {
      alert('删除失败');
    }
    if(this.code === 0){
      alert('删除成功');
    }
    this.code = 0;
    this.getMembers();
  }
  create(){
    this.router.navigate(['/layout/membercreate']);
  }
}

