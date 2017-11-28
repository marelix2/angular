import {Component, AfterContentChecked, OnInit} from '@angular/core';
import {UsersService} from "../users.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
   users: string[];
   userSetToInactive;

  constructor(private usersServ: UsersService){}
ngOnInit(){
    this.users = this.usersServ.activeUsers;
}

  onInactive(i: number){
    this.usersServ.onSetToActive(i);
  }
}
