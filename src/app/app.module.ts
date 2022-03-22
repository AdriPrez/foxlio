import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BackgraundsComponent } from './components/backgraunds/backgraunds.component';
import { AvatarinfoComponent } from './components/avatarinfo/avatarinfo.component';
import { SkillComponent } from './components/skill/skill.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BackgraundsComponent,
    AvatarinfoComponent,
    SkillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
