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
    password: ''

  }

  constructor(private authService: AuthService) { }

  entrar(){
    console.log(this.usuario);
  }



  Entrar() {
   console.log(this.usuario);
   const{email,password} = this.usuario;
   this.authService.login(email,password).then(res =>{
    console.log("se registro",res);
   }

   )

  }






  logout(){

  this.authService.logout();

 }




  ngOnInit(): void {
  }



}


