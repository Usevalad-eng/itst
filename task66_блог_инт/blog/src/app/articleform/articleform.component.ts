import { Component, OnInit } from '@angular/core';
import { Article } from '../article.model';
import { ArticleService } from '../article.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-articleform',
  templateUrl: './articleform.component.html',
  styleUrls: ['./articleform.component.scss']
})
export class ArticleformComponent implements OnInit {

    title: string = "";
    previewText: string = "";
    fullText: string = "";
    picture: string = "";
    date: Date = new Date();
    author: string = "";

    //constructor(private articleService: ArticleService) { }

    ngOnInit(): void {

    }

    addArticle():void{
      if(this.title == "" || this.previewText == "" || this.fullText == "" || this.author == "")
        return;

        let article = new Article(
                            this.title,
                            this.previewText,
                            this.fullText,
                            this.picture,
                            this.date,
                            this.author
                            );
        
        this.articleService.create(article);
    }

    myForm : FormGroup;
    constructor(private articleService: ArticleService){
        this.myForm = new FormGroup({
              
            "title": new FormControl("", Validators.required),
            "author": new FormControl("", Validators.required),
            "date": new FormControl("", Validators.required),
            "picture": new FormControl("", Validators.required),
            "previewText": new FormControl("", Validators.required),
            "fullText": new FormControl("", Validators.required),
        });
    }
      
    submit(){
      let article = new Article(
        this.myForm.value.title,
        this.myForm.value.previewText,
        this.myForm.value.fullText,
        this.myForm.value.picture,
        this.myForm.value.date,
        this.myForm.value.author
        );

    this.articleService.create(article);
    this.myForm.reset();
    }

}
