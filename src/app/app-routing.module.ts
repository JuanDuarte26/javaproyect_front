import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { LoginComponent} from '../app/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { DashComponent } from './dash/dash.component';
import{AuthGuard} from '../app/auth-guard.guard';
import { SingupComponent } from './singup/singup.component';

const routes:Routes=[
  { path:'',redirectTo:'home', pathMatch:'full'},
  { path:'home', component: HomeComponent},
  { path:'login', component: LoginComponent},
  { path:'singup', component: SingupComponent},
  { path:'dash', component: DashComponent, canActivate:[AuthGuard]}
  
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash:true
    })
  ]
})
export class AppRoutingModule { }
