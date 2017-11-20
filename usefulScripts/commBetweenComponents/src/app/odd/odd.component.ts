import {Component, Input, OnInit, AfterContentInit} from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {

 @Input() oddNumber;
  oddTable = [];

  constructor() {

  }

  ngOnInit() {
  }

  ngAfterContentInit(){
    if(this.oddNumber % 2 === 1)
  this.oddTable.push(this.oddNumber);
 }

}
