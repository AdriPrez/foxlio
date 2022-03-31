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

import { NgCircleProgressModule } from 'ng-circle-progress';
import { EditarComponent } from './components/editar/editar.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      "radius": 60,
      "space": -10,
      "outerStrokeGradient": true,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#4882c2",
      "outerStrokeGradientStopColor": "#ff9500",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 10,
      "title": "UI",
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": false,
      "showBackground": false,
      "clockwise": false,
      "startFromZero": false,
      "lazy": false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
