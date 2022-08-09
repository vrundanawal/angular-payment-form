import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //name: string  = ''
  name: string | undefined;
  date: string | undefined;
  amount: number | undefined;

  //method to handle name
  handleOnName(value: string) {
    this.name = value;
  }
  //method to handle Date
  handleOnDate(value: string) {
    this.date = value;
  }

  //method to handle Amount
  handleOnAmount(value: string) {
    //convert number into string
    this.amount = parseFloat(value);
  }
}
