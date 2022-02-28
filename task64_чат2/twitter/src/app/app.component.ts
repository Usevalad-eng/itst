import { Component } from '@angular/core';
import { Twit } from './twit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    posts: Twit[] = [];
    user: string = "";
    user1: string = "";
    user2: string = "";
    text: string = "";

    addPost():void{
        
            this.posts.push({
                user1: this.user1,
                user2: this.user2,
                date: new Date(),
                text: this.text
            })
            this.user = "";
            this.text = "";
        

    }
}
