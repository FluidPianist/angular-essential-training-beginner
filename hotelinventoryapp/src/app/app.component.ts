import { Component } from '@angular/core';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template : `<h1>hello world from inline component</h1>
  // <p>Angular is awesome</p>`,
  styleUrls: ['./app.component.scss'],
  //styles : [`h1{ color : red; }`]
})
export class AppComponent {
  title = 'hotelinventoryapp';
}
