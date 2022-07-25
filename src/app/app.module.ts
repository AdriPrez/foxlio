import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BackgraundsComponent } from './components/backgraunds/backgraunds.component';
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
import { NavbarbelowComponent } from './components/navbarbelow/navbarbelow.component';
import { AngularFireModule } from '@angular/fire/compat';
import {environment} from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BackgraundsComponent,
    AvatarinfoComponent,
    SkillComponent,
    ProgressComponent,
    EducacionComponent,
    EditarComponent,
    LoginComponent,

    HomeComponent,
      NavbarbelowComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    //firebase//
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
    //firebase//


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
