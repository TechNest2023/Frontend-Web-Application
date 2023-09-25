import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegistrationComponent} from "./auth/registration/registration.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/log-in',
    pathMatch: 'full',
  },
  {
    path: 'start',
    title: 'EduFocus',
    component: DashboardComponent,
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
