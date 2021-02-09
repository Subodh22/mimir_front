import { Component,OnDestroy,OnInit  } from "@angular/core";
import {Post} from '../post.model';
import {PostsService} from '../post.service';
import {Subscription} from 'rxjs';
@Component({
  selector:'app-postlist',
  templateUrl:'./post-list.component.html',
  styleUrls:['./post-list.component.css']

})
export class PostListComponent implements OnInit,OnDestroy{
  posts:Post[]=[];
  private postsSub:Subscription;

  constructor(public postsService:PostsService){}
  ngOnInit()
  {
    this.posts=this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener().subscribe((posts:Post[])=>
    {
      this.posts=posts;
    });
  }

  ngOnDestroy()
  {
    this.postsSub.unsubscribe();
  }
  // posts=[
  //   {tilte:"First Post",content:"NEW FIRST DATA"},
  //   {tilte:"Second Post",content:"NEW Second DATA"},
  //   {tilte:"ThirdPost",content:"NEW Third DATA"}
  // ]
}
