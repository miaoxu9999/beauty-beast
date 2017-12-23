import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {

      // page is now ready, initialize the calendar...

      $('#calendar').fullCalendar({
        // put your options and callbacks here
        events: [
          {
            title  : 'event1',
            start  : '2017-12-26'
          },
          {
            title  : 'event2',
            start  : '2017-12-05',
            end    : '2017-12-07'
          },
          {
            title  : 'event3',
            start  : '2017-12-19T12:30:00',
            allDay : false // will make the time show
          }
        ]
      });

    });
  }

}
