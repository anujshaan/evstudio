import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Task1Component } from './components/task1/task1.component';
import { Task2Component } from './components/task2/task2.component';

const routes : Routes = [
  { path: '', component:HomeComponent},
  { path: 'task1', component:Task1Component},
  { path: 'task2', component:Task2Component},
  { path: 'login', component:LoginComponent},
  { path: 'signup', component:SignupComponent},
  { path: '**', redirectTo:''},
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
