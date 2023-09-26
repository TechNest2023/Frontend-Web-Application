import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./core/auth/login/login.component";
import {RegistrationComponent} from "./core/auth/registration/registration.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {SidebarComponent} from "./shared/components/sidebar/sidebar.component";
import {SupportComponent} from "./public/pages/support/support.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/log-in',
    pathMatch: 'full',
  },
  {
    path: 'home',
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
    path: 'edu/my-advice',
    title: 'Advices',
    component: SidebarComponent,
  },
  {
    path: 'support',
    title: 'Support',
    component: SupportComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
