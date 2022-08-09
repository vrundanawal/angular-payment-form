import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //name: string  = ''
  name: string | undefined;
  //method to handle name
  handleOnName(value: string) {
    this.name = value;
  }
}
