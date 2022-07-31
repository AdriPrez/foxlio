import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  userLogeed=this.authService.getUserLogged();
  constructor(private authService: AuthService) {}


  ngOnInit(): void {
  }

}
