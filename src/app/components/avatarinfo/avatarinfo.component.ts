import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-avatarinfo',
  templateUrl: './avatarinfo.component.html',
  styleUrls: ['./avatarinfo.component.scss']
})
export class AvatarinfoComponent implements OnInit {
  userLogeed=this.authService.getUserLogged();

  constructor(private authService: AuthService) {}
  ngOnInit(): void {
  }

}

