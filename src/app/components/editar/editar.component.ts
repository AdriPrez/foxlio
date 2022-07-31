import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
form: FormGroup;

  constructor(private fb:FormBuilder) {
    this.form =this.fb.group({
      titulo: ['',Validators.required],
      informacion: ['',Validators.required]
    })

  }

  ngOnInit(): void {
  }

creardato(){
  console.log(this.form);
}

}
