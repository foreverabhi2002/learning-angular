import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  time = `It's ${new Date}`;
  getName() {
    console.log("Clicked !!!")
  }
  getData(box:any) {
    console.warn(box)
  }
  greet(hover:any) {
    console.warn(hover)
  }
}
