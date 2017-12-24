import { Component, OnInit } from '@angular/core';
import {CheckInService} from '../check-in.service';
import {Router} from '@angular/router';
import {Registration} from '../registration';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  registrations: Registration[];
  headerInfo = ['id', '活动名称', '活动时间'];
  constructor(private checkInService: CheckInService, private router: Router) { }
  ngOnInit() {
    this.getRegistrations();
  }
  getRegistrations(): void {
    this.checkInService.getRegistrations().then(data => this.registrations = data);

  }}
