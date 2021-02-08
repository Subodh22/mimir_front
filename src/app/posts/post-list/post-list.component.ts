import { Component } from "@angular/core";

@Component({
  selector:'app-postlist',
  templateUrl:'./post-list.component.html',
  styleUrls:['./post-list.component.css']

})
export class PostListComponent{

  posts=[
    {tilte:"First Post",content:"NEW FIRST DATA"},
    {tilte:"Second Post",content:"NEW Second DATA"},
    {tilte:"ThirdPost",content:"NEW Third DATA"}
  ]
}
