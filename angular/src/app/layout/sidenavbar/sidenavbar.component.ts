import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements OnInit {
  name: any;
  privilegeType: any;
  isAllow = false;
  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.sidenav').sidenav();
      $('.collapsible').collapsible();
    });
    this.name = sessionStorage.getItem("name");
    this.privilegeType = sessionStorage.getItem("privilegeType");
    this.privilegeType = parseInt(this.privilegeType);
    if(this.privilegeType === 1){
      this.isAllow = true;
    }
  }

}
