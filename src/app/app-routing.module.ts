import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./core/auth/login/login.component";
import {RegistrationComponent} from "./core/auth/registration/registration.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {ChatComponent} from "./edu/pages/chats/chat/chat.component";
import { ListActivitiesComponent } from './edu/pages/activities/list-activities/list-activities.component';
import { SelectedSpecialistsComponent } from './edu/pages/selected-specialists/selected-specialists.component';
import {SidebarComponent} from "./shared/components/sidebar/sidebar.component";
import {ProfileComponent} from "./edu/pages/profile/profile.component";

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
    title: 'Specialists',
    component: SelectedSpecialistsComponent,
  },
  {
    path: 'edu/profile',
    title: 'Profile',
    component: ProfileComponent,
  },
  {
    path: 'chat',
    title: 'Chat',
    component: ChatComponent,
  },
  {
    path: 'edu/my-advice',
    title: 'My Advice',
    component: SidebarComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
