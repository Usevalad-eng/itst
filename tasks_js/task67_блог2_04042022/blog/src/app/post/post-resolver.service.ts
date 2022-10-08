import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Post, PostService } from '../core';

@Injectable()
export class PostResolverService implements Resolve<Post>{

  constructor(private postService: PostService, route: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Post {
    return this.postService.getById(route.params["id"]);
}
}



