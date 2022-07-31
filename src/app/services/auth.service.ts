import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AnguAuth:AngularFireAuth) { }

  async register(email: string, password: string) {
    try {
      return await this.AnguAuth.createUserWithEmailAndPassword(email, password);
    } catch (err) {
      console.log("error en login: ", err);
      return null;
    }
  }


 async login(email:string,password:string){
  try{
    return await this.AnguAuth.signInWithEmailAndPassword(email,password);
  }
  catch(err){
    alert("No se pudo hacer log-in correctamente"+ err)
    console.log("No se pudo hacer log-in correctamente" + err);
    return null;
  }
  }




  getUserLogged(){

    return this.AnguAuth.authState;

  }

    logout(){

      this.AnguAuth.signOut();

    }




}

