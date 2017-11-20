import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

 @Output() numberAvaliable = new EventEmitter<number>();
  i = 1;
  interval: number;
  constructor() {
  }

  ngOnInit() {

  }

  repeat() {
    this.i++;
    this.numberAvaliable.emit(this.i);
  }

  onStartingGame() {
  this.interval = window.setInterval(() => this.repeat(), 1000);
  }

  onStoppingGame() {
    this.i  = 1;
    window.clearInterval(this.interval);
  }
}
