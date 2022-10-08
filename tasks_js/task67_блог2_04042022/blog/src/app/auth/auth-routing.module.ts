import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPostComponent } from './formpost/formpost.component';
import { PostComponent } from './post.component';
import {PostResolverService} from './post-resolver.service';
import { PostDetailComponent } from './postdetail/postdetail.component';

const routes: Routes = [
  {path: "", component: PostComponent, pathMatch: 'full' },
  {path: "add", component: FormPostComponent, pathMatch: 'full' },
  {path: ":id", component: PostDetailComponent, resolve: { post: PostResolverService } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }


