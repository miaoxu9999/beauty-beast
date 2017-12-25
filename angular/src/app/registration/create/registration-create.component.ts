import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CheckInService} from '../../check-in/check-in.service';
import {Registration} from '../../check-in/registration';

@Component({
  selector: 'app-registration-create',
  templateUrl: '../update/registration-update.component.html',
  styleUrls: ['../registration.component.css']
})
export class RegistrationCreateComponent implements OnInit {

  code=0;
  registration = new Registration();
  constructor(public router: Router, public checkInService: CheckInService) { }
  ngOnInit(){
  }
  save(){
    this.checkInService.create(this.registration).then(code => this.code = code);
    if (this.code === 0) {
      if (confirm('增加成功，是否离开本页？')) {
        this.router.navigate(['/layout/registeration']);
      }
    }
    else{
      alert('增加失败');
    }
  }
  cancel() {
    this.router.navigate(['/layout/registeration']);
  }
}
