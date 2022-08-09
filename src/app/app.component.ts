import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //name: string  = ''
  name: string | undefined;
  inputDate: string | undefined;
  amount: number | undefined;
  height: number | undefined;

  //json
  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
  };

  //method to handle name
  handleOnName(value: string) {
    this.name = value;
  }
  //method to handle Date
  handleOnDate(value: string) {
    this.inputDate = value;
  }

  //method to handle Amount
  handleOnAmount(value: string) {
    //convert number into string
    this.amount = parseFloat(value);
  }
  //method to handle Height
  handleOnHeight(value: string) {
    this.height = parseFloat(value);
  }
}
