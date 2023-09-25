import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {RegistrationComponent} from "./auth/registration/registration.component";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'start',
    title: 'EduFocus',
    component: HomeComponent,
  },
  {
    path: 'log-in',
    title: 'Log In',
    component: LoginComponent,
  },
  {
    path: 'register',
    title: 'Create Account',
    component: RegistrationComponent,
  },
  {
    path: 'home',
    title: 'Home',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
