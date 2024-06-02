import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {PostServiceService} from '../post-service.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit{
  constructor(public postservice: PostServiceService){}

  ngOnInit(): void {}

  onAddPost(postform: NgForm){
    if(postform.invalid){
      alert('Invalid')
      return
    }
    alert(postform.value.author+" : "+postform.value.title+" : "+postform.value.content)

    this.postservice.addpost_service(postform.value.author,postform.value.title,postform.value.content)
    postform.resetForm();
  }
}
