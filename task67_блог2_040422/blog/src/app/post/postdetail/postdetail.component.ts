import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService, PostService, UserService } from 'src/app/core';

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
        });
    }
    post: any;
    comments: any;
    constructor(private route: ActivatedRoute, private userService: UserService) { 
        
    }

    getUserName(userId: number): string{
        return this.userService.getById(userId)?.name;
    }

}
