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
    text: string = "";
    date: string = "";

    addPost():void{
        if(this.user != "" && this.text != ""){
            this.posts.push({
                user: this.user,
                date: new Date(),
                text: this.text
                
            })
            this.user = "";
            this.text = "";
            this.date = "";
        }

    }
    

    delPost(posts:any):void{
        let index:number = this.posts.findIndex(function(item:void) {
            item == posts
        });
        if(index !== -1){
            this.posts.splice(index, 1);
        }
    }
}
