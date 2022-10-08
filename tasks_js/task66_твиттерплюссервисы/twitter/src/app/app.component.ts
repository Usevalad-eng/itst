import { Component, OnInit} from '@angular/core';
import { Twit } from './twit';
import { NoteService } from './note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NoteService]
})
export class AppComponent implements OnInit {
    posts: Twit[] = [];

    user: string = "";
    text: string = "";
    noteService: any;
    ngOnInit(){
        this.posts = this.noteService.getData();
    }
    addPost():void{
        if(this.user != "" && this.text != ""){
            this.posts.push({
                user: this.user,
                date: new Date(),
                text: this.text
            })
            this.user = "";
            this.text = "";
        }

    }
}
