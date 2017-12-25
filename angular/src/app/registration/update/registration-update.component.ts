import {Component, OnInit} from '@angular/core';
import {Registration} from '../../check-in/registration';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CheckInService} from '../../check-in/check-in.service';

@Component({
  selector: 'app-registration-update',
  templateUrl: './registration-update.component.html',
  styleUrls: ['../registration.component.css']
})
export class RegistrationUpdateComponent implements OnInit{
  title = '活动信息';
  registration = new Registration();
  code = 0;
  constructor(public router: Router, public checkInService: CheckInService, public route: ActivatedRoute){
  }
  ngOnInit(){
    this.route.paramMap
      .switchMap ((params: ParamMap) => this.checkInService.getRegistrationById(+params.get('registerationId')))
      .subscribe(data => this.registration = data);
  }
  cancel() {
    this.router.navigate(['/layout/registeration']);
  }
  save() {
    this.checkInService.update(this.registration).then(code => this.code = code);
    if (this.code === 0) {
      if (confirm('修改成功，是否离开本页？')) {
        this.router.navigate(['/layout/registeration']);
      }
    }
    else{
      alert('修改失败');
    }
  }
}
