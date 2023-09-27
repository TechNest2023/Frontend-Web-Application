import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./core/auth/login/login.component";
import {RegistrationComponent} from "./core/auth/registration/registration.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {SidebarComponent} from "./shared/components/sidebar/sidebar.component";
import {SupportComponent} from "./public/pages/support/support.component";
import {ChatComponent} from "./edu/pages/chats/chat/chat.component";
import { ListActivitiesComponent } from './edu/pages/activities/list-activities/list-activities.component';
import { SelectedSpecialistsComponent } from './edu/pages/selected-specialists/selected-specialists.component';

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
    path: 'list-activities',
    title: 'Activities',
    component: ListActivitiesComponent,
  },
  {
    path: 'register',
    title: 'Create Account',
    component: RegistrationComponent,
  },
  {
    path: 'edu/my-advice/specialists',
    title: 'Advices',
    component: SelectedSpecialistsComponent,
  },
  {
    path: 'support',
    title: 'Support',
    component: SupportComponent,
  },
  {
    path: 'chat',
    title: 'Chat',
    component: ChatComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
