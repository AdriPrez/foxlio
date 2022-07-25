import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackgraundsComponent } from './components/backgraunds/backgraunds.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditarComponent } from './components/editar/editar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './home/home.component';

//routing//




const routes: Routes = [

  {path: '', component:HomeComponent },
  {path:'EditarComponent', component:EditarComponent},
  {path:'LoginComponent',component:LoginComponent},
  {path: '**', component:HomeComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

