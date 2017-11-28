import { Component } from '@angular/core';
import {CounterService} from "./counter.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  counterr = 0;
constructor(private countServ: CounterService){
  this.counterr = countServ.counter;
}

}
