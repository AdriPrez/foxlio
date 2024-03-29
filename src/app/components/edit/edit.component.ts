import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/post.model';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public editForm: FormGroup;
  postRef:any

  constructor(
    public postService:PostService,
    public formBuilder:FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.editForm = this.formBuilder.group({
      title: [''],
      content: [''],
    })
   }
  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.postService.getPostById(id).subscribe(res => {
      this.postRef = res;
      this.editForm = this.formBuilder.group({
        title: [this.postRef.title],
        content: [this.postRef.content],
      })
    })

  }

  onSubmit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.postService.updatePost(this.editForm.value, id);
    this.router.navigate(['']);
    console.log(this.editForm.value)
  }

}
