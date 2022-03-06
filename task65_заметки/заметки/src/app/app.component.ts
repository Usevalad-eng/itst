import { Component } from '@angular/core';
import { Twit } from './twit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    posts: Twit[] = [];
    task: any;
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
    

    delPost(posts:Twit):void{
        let index:number = this.posts.findIndex(function(item:Twit) {
            item == posts
        });
        if(index !== -1){
            this.posts.splice(index);
        }
    }
}
