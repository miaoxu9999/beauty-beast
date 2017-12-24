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
  headerInfo = ['id', '活动名称', '活动时间','操作'];
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
}
