import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interpolation Data';
  AppName = 'This is an one-way data binding example!';

  header1 = 'Number Interpolation';
  n1 = 70;
  n2 = 30;
  sum = 0;
  diff = 0;
  quo = 0;
  prod = 0;

  //property binding
  clientName:string = 'Lao, Amari Kelsie Emmett C.';

  //style binding
  appliedCSSClass = 'green';
  notapplieCSSClass = false;
  myColor = 'red';

  //Two-way Data Binding
  showData($event:any){
    console.log("Button is Clicked!")
  }

  //Keyup Function
  getData(data:any){
    console.warn(data)
  }
}
