

import { Component } from '@angular/core';
import { List } from './list';
import { Output } from './output';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    posts: List[] = [];

    user1: string = "";
    user2: string = "";
    text: string = "";

    addPost():void{
        if(){
            this.posts.push({
                user1: this.user1,
                date: new Date(),
                text: this.text
            })
            this.user1 = "";
            this.text = "";
        }

    }
}
