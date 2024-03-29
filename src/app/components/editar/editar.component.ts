import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/post.model';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  Posts: Post[]
  constructor(private postService: PostService) {}
 ngOnInit(): void {
  console.log(this.postService.getPosts())
   this.postService.getPosts().subscribe((res) => {
     this.Posts = res.map((e) => {
       return {
         id: e.payload.doc.id,
         ...(e.payload.doc.data() as Post)
       };
     });
     console.log(this.Posts)
   });
 }
 deleteInfo = (Posts) => this.postService.deletePost(Posts);
}
