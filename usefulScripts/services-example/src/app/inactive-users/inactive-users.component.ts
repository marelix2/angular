import {Component, OnInit} from '@angular/core';
import {UsersService} from "../users.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],

})
export class InactiveUsersComponent implements  OnInit{
  users: string[];

  constructor(private usersServ: UsersService){}

  ngOnInit(){
    this.users = this.usersServ.inactiveUsers;
  }


  onActive(i: number){
    this.usersServ.onSetToInactive(i);
}
}
