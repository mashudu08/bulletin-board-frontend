import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-post-display',
  templateUrl: './post-display.component.html',
  styleUrl: './post-display.component.css'
})
export class PostDisplayComponent implements OnInit, OnDestroy{

  posts:{_id: string, author: string, title: string, content:string}[] = [];

  constructor(public postservice: PostServiceService){}
  private postsubscription!: Subscription;

  ngOnInit(){
    this.postservice.getpost_service();
    this.postsubscription = this.postservice.getUpdateListener()
    .subscribe((posts:{_id: string, author: string, title: string, content: string}[]) =>
    {
      this.posts = posts;
    }, error => {
      console.error('Error fetching posts:', error);
    });
  }

  ngOnDestroy(){
    this.postsubscription.unsubscribe();
  }

  onDelete(postId:string){
    this.postservice.deletepost_service(postId)
  }
}
