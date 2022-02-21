import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  a: number = 0;
  b: number = 0;

getSum(): string{
  if(this.a != null)
    return `${this.a}+${this.b}=${this.a+this.b}`;
  return `error`;
}


}
