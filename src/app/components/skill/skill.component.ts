import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  userLogeed=this.authService.getUserLogged();
  constructor(private authService: AuthService) {}


  ngOnInit(): void {
  }

}
