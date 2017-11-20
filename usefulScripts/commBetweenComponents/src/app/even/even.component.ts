import {Component, Input, OnInit, AfterContentInit} from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  evenTable = [];
  @Input() evenNumber: number;
  constructor() {

  }

  ngOnInit() {
  }

  ngAfterContentInit(){
    if(this.evenNumber %2 == 0)
    this.evenTable.push(this.evenNumber);
  }



}
