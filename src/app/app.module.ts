import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './shared/footer/footer.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NavComponent } from './shared/nav/nav.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { HomeComponent } from './pages/home/home.component';
import { MatSelectModule } from '@angular/material/select';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import { AddConversationDialogService } from './services/chat/add-conversation-dialog.service';
import { MatDialogModule } from '@angular/material/dialog';
import { ChatDialogComponent } from './pages/chat-dialog/chat-dialog.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ChatComponent } from './pages/chat/chat.component';
import { AddConversationDialogComponent } from './pages/add-conversation-dialog/add-conversation-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    SidebarComponent,
    ChatComponent,
    AddConversationDialogComponent,
    ChatDialogComponent,
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
    MatCardModule,
    MatDialogModule,
    MatCheckboxModule,
  ],
  providers: [AddConversationDialogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
