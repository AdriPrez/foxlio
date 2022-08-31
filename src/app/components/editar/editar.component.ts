import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
form: FormGroup;

  post = {
    id: '',
    titulo : '',
    informacion : ''
  }

  constructor(private fb:FormBuilder, private postService: PostService) {
    this.form =this.fb.group({
      titulo: ['',Validators.required],
      informacion: ['',Validators.required]
    })
    this.postService = postService
  }

  ngOnInit(): void {
  }

creardato(){
  const {id, titulo, informacion} = this.post
  // generar id de alguna manera
  // if id == '' o es nulo, crearlo. sino, usarlo
  this.postService.save(id, titulo, informacion).then(post => {
    console.log("post: ", post);
    if(!post) {
      alert("Datos incorrectos!");
      return;
    };
  })
  console.log(this.form);
}


cargardato(){
  const {id, titulo, informacion} = this.post
  this.postService.load(id, titulo, informacion).then(post => {
    console.log("post: ", post);
    if(!post) {
      alert("Datos incorrectos!");
      return;
    };
  })
  console.log(this.form);
}

}
