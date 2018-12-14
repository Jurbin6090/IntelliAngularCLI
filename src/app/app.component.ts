import { Component } from '@angular/core';
import Test from '../js/Test.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IntelliAngularCLI';

  constructor(){
    const test = new Test('myValue');
    console.log(test.testMethod());
  }
}

