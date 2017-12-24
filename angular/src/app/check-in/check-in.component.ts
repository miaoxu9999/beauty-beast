import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {

      // page is now ready, initialize the calendar...

      $('#calendar').fullCalendar({
        // put your options and callbacks here
        eventSources: [

          // your event source
          {
            url: '/api/Registration', // use the `url` property
            color: 'yellow',    // an option!
            textColor: 'black'  // an option!
          }

          // any other sources...

        ]

      });

    });
  }

}
