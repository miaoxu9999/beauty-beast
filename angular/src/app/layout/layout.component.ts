import { Component, OnInit } from '@angular/core';
import {  Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Observable.fromEvent(window,'resize')

      .subscribe((event) => {

        // 操作
        if(window.innerWidth < 715){
          $('.stepper').attr('class', 'stepper stepper-vertical');
        }
        else{
          $('.stepper').attr('class', 'stepper stepper-horizontal');
        }


      });
  }






}
