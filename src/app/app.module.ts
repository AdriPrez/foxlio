import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AvatarinfoComponent } from './components/avatarinfo/avatarinfo.component';
import { SkillComponent } from './components/skill/skill.component';
import { ProgressComponent } from './components/progress/progress.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HomeComponent } from './home/home.component';
import { EditarComponent } from './components/editar/editar.component';
import { LoginComponent } from './components/login/login.component';

//routing//
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
//firebase//

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import {environment} from 'src/environments/environment';

//fire data//
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';

import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { DragDropModule } from "@angular/cdk/drag-drop";
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';

//op
import * as firebase from "firebase/app"
var localFire = !firebase.getApps.length ? firebase.initializeApp(environment.firebaseConfig) : firebase.getApp();


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AvatarinfoComponent,
    SkillComponent,
    ProgressComponent,
    EducacionComponent,
    EditarComponent,
    LoginComponent,
    HomeComponent,
    CreateComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DragDropModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    //firebase//
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    provideFirebaseApp(() => localFire),
    provideFirestore(() => getFirestore())
    //firebase//

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
