import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/post.model';

@Component({
  selector: 'app-avatarinfo',
  templateUrl: './avatarinfo.component.html',
  styleUrls: ['./avatarinfo.component.scss']
})
export class AvatarinfoComponent implements OnInit {
  Posts: Post[]
  userLogeed=this.authService.getUserLogged();

  constructor(private authService: AuthService,private postService: PostService) {}


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

  deleteInfo = (post) => this.postService.deletePost(post);
}
