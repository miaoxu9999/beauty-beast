import { Component, OnInit } from '@angular/core';
import {Activity} from '../activity';
import {Registration} from '../registration';
import {CheckInService} from '../check-in.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {

  activities: Activity[]=[];
  registrations: Registration[];
  constructor(private checkInService: CheckInService, private router: Router) { }
  ngOnInit() {
    this.getRegistrations();

  }
  getRegistrations(): void {
    this.checkInService.getRegistrations().then(data => {
      this.registrations = data;
      this.eventMapping();



      // page is now ready, initialize the calendar...

      $('#calendar').fullCalendar({
        // put your options and callbacks here
        eventSources: [

          // your event source
          {
            events: this.activities,
            color: 'black',     // an option!
            textColor: 'yellow' // an option!
          }

          // any other event sources...

        ]

      });
    });

  }
  eventMapping(){
    for (let i = 0 ; i < this.registrations.length ; i++)
    {
      this.activities[i] = new Activity();
      this.activities[i].title = this.registrations[i].meetingName;
      this.activities[i].start = this.registrations[i].activityTime;
    }
  }
}
