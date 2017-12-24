import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Registration} from './registration';
import {CheckInService} from './check-in.service';
import {Activity} from './activity';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {

  constructor(private checkInService: CheckInService, private router: Router) { }
  ngOnInit() {

    $(document).ready(function(){
      $('ul.tabs').tabs();
    });
  }

}
