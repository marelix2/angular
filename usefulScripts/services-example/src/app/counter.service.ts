
import {Injectable, OnInit} from "@angular/core";
import {UsersService} from "./users.service";

@Injectable()
export class CounterService implements OnInit{

  counter;
  constructor(private userServ: UsersService) { }

  ngOnInit(){

    this.counter = this.userServ.counter;
    console.log(this.counter);
  }


}
