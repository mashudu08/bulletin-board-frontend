import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  private postsDisplay:{_id:string,author:string,title:string,content:string}[] = [];
  private updatedPostsDisplay = new Subject<{_id:string,author:string,title:string,content:string}[]>();

  constructor(private http: HttpClient) { }

  addpost_service(pauthor:string,ptitle:string, pcontent:string)
  {
    this.http.post<{message:string,post:any}>('https://localhost:3000/api/posts',{author:pauthor,title:ptitle,content:pcontent})
    .subscribe((thepost) =>
    {
      this.postsDisplay.push(thepost.post);
      this.updatedPostsDisplay.next([...this.postsDisplay]);
    })
  }

  getpost_service()
  {
   this.http.get<{message:string,posts:any}>('https://localhost:3000/api/posts')
  .subscribe((thepost)=>
  {
    this.postsDisplay = thepost.posts;
    this.updatedPostsDisplay.next([...this.postsDisplay]);
  })
}

  deletepost_service(postid:string)
  {
    this.http.delete('https://localhost:3000/api/posts'+ postid)
    .subscribe(()=>{
      const updatedPostsDeleted = this.postsDisplay.filter(post=>post._id!==postid);
      this.postsDisplay = updatedPostsDeleted;
      this.updatedPostsDisplay.next([...this.postsDisplay]);
    })
  }

  getUpdateListener(){
    return this.updatedPostsDisplay.asObservable();
  }
}
