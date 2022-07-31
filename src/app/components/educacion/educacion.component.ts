import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit {


  userLogeed=this.authService.getUserLogged();
  constructor(private authService: AuthService) {}


  ngOnInit(): void {
  }

}
