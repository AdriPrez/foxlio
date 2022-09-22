import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Post } from 'src/app/post.model';
import { PostService } from 'src/app/services/post.service';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
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
