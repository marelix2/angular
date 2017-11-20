import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbersToSplit = [];

  onGetNumber(numberData: number) {
    this.numbersToSplit.push(numberData);

  }
}
