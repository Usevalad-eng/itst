import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { UserService } from 'src/app/core';
//import { CommentService } from 'src/app/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post, PostService, Comment, CommentService, User, UserService } from 'src/app/core';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.scss']
})
export class PostDetailComponent implements OnInit {

    ngOnInit(): void {
        this.route.data.subscribe(data =>{
            if(data["post"])
                this.post = data["post"];
            if(data["comments"])
                this.comments = data["comments"];
        });
    }

    post: any;
    comments: any;

    form: FormGroup;

    
    constructor(private commentService: CommentService, private route: ActivatedRoute, private userService: UserService, private router: Router) { 
      this.form = new FormGroup({
        "text": new FormControl(""),
        
        "postId": new FormControl(""),
        
        "date": new FormControl(new Date())
      })
      this.userService.getCurrentUserId();
    }


   

    getUserName(userId: number): string{
        return this.userService.getById(userId)?.name;
    }
    addComment():void{

        //if(this.form.invalid)
            //return;
        let newId: any;
        let articles = this.commentService.getByPostId(newId);
         
        if(articles.length == 0)
            newId = 1;
        else
            newId = articles[articles.length - 1].id + 1;
          
          
        let comment: Comment = {
            id: newId,
            text: this.form.value.text,
            //postId: this.form.value.postId,
            postId: newId,
            //date: this.form.value.date,
            date: new Date(),
            userId: this.userService.getCurrentUserId()
        };
        
        this.commentService.create(comment);
        this.form.reset();
        this.router.navigate(["/post"]);
    }
}
