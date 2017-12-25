import { Component, OnInit } from '@angular/core';
import {Registration} from '../check-in/registration';
import {CheckInService} from '../check-in/check-in.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrations: Registration[];
  headerInfo = ['id', '活动名称', '活动时间', '操作'];
  code = 0;
  constructor(private checkInService: CheckInService, private router: Router) { }
  ngOnInit() {
    this.getRegistrations();
  }
  getRegistrations(): void {
    this.checkInService.getRegistrations().then(data => this.registrations = data);

  }
  myclick() {
    if ($('.myfixed-btn>ul').attr('class') === 'show') {
      $('.myfixed-btn>ul').removeClass('show');
    } else {
      $('.myfixed-btn>ul').addClass('show');
    }
  }
  edit(registerationId:any){
    alert(registerationId);
    this.router.navigate(['/layout/registerationupdate/' + registerationId]);
  }
  delete(){
    const selectEl = $('.selected');

    for ( let i = 0 ; i < selectEl.length; i++){
      this.checkInService.delete(selectEl.eq(i).attr('id')).then(code => this.code = this.code + code );
    }
    if (this.code > 0) {
      alert('删除失败');
    }
    if(this.code === 0){
      alert('删除成功');
    }
    this.code = 0;
    this.getRegistrations();
  }
  create(){
    this.router.navigate(['/layout/registerationcreate']);
  }
}
