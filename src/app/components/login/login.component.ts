import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario={

    email: '',
    password: '',

  }

  ngOnInit(): void {
  }


  constructor(private authService: AuthService) { }





  entrar() {
    const { email, password } = this.usuario;
    this.authService.login(email, password).then(user => {
      console.log("Bienvenido ", user);
      if(!user) {
        alert("Datos incorrectos, si no tenes cuenta registrate!");
        return;
      };
    })
  }


  logout() {
    this.authService.logout();
  }


}

