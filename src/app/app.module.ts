import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import{MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { NavComponent } from './shared/components/nav/nav.component';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import { HomeComponent } from './public/pages/home/home.component';
import {MatSelectModule} from "@angular/material/select";
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import { MatCardModule } from '@angular/material/card';


import { SupportComponent } from './public/pages/support/support.component';
import { SpecialistsComponent } from './edu/pages/specialists/specialists.component';
import {SpecialistService} from "./edu/services/specialist.service";


import { AddConversationDialogService } from './edu/services/chat/add-conversation-dialog.service';
import { MatDialogModule } from '@angular/material/dialog';
import { ChatDialogComponent } from './edu/pages/chats/chat-dialog/chat-dialog.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ChatComponent } from './edu/pages/chats/chat/chat.component';
import { AddConversationDialogComponent } from './edu/pages/chats/add-conversation-dialog/add-conversation-dialog.component';
import { SelectedSpecialistsComponent } from './edu/pages/selected-specialists/selected-specialists.component';
import { ListActivitiesComponent } from './edu/pages/activities/list-activities/list-activities.component';
import { FileUploadDialogComponent } from './edu/pages/activities/file-upload-dialog/file-upload-dialog.component';
import { ScheduledSessionsComponent } from './edu/pages/scheduled-sessions/scheduled-sessions.component';
import { ProgressComponent } from './edu/pages/progress/progress.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    SidebarComponent,

    SupportComponent,
    SpecialistsComponent,

    ChatComponent,
    AddConversationDialogComponent,
    ChatDialogComponent,
    SelectedSpecialistsComponent,
    ListActivitiesComponent,
    FileUploadDialogComponent,
    ScheduledSessionsComponent,
    ProgressComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule,
    MatCheckboxModule,
  ],
  providers: [SpecialistService, AddConversationDialogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
