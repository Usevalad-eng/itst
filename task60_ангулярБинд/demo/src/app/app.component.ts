import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my first demo';
  age: number = 25;
  link: string = "https://www.mts.by/local/templates/ns_mts/img/svg/logo-new.svg";
  name: string = "моё имя";
  red = "";

  addAge($event: any): void{
    this.age++;
    console.log($event.target);
  }
  subAge(): void{
    this.age--;
    
  }


  addClass(): void{
    this.red = "hover";
  }
  removeClass(): void{
    this.red = "";
  }
}
