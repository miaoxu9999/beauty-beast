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

  registration = new Registration();
  constructor(public router: Router, public checkInService: CheckInService) { }
  ngOnInit(){
  }
  save(){
    this.checkInService.create(this.registration).then();
  }
}
