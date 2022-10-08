import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post, PostService, User, UserService } from 'src/app/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  form: FormGroup;
    users: Array<User>;
    
    constructor(private postService: PostService, private userService: UserService, private router: Router) { 
      this.form = new FormGroup({
        "login": new FormControl("", [Validators.required, Validators.maxLength(100), Validators.minLength(1)]),
        "password": new FormControl("", [Validators.required])
        
      })
      this.users = userService.get();
    }

  ngOnInit(): void {
  }
      addPost():void{

        if(this.form.invalid)
            return;

        let articles = this.postService.get();
        let newId;
        if(articles.length == 0)
            newId = 1;
        else
            newId = articles[articles.length - 1].id + 1;
          
          
        let article:Post = {
            id: newId,
            title: this.form.value.title,
            previewText: this.form.get("previewText")?.value,
            fullText: this.form.controls["fullText"].value,
            picture: this.form.value.picture,
            date: this.form.value.date,
            userId: this.form.value.userId
        };
        
        this.postService.create(article);
        this.form.reset();
        this.router.navigate(["/post"]);
    }

}

