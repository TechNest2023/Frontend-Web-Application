import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddConversationDialogService } from 'src/app/services/chat/add-conversation-dialog.service';
import { ChatDialogComponent } from '../chat-dialog/chat-dialog.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {
  constructor(
    private addConversationDialogService: AddConversationDialogService,
    private dialog: MatDialog
  ) {}

  users = [
    {
      name: 'Paola Shau',
      status: 'Activo',
      avatar: 'https://i.postimg.cc/HkZL23Wy/specialist5.png',
    },
    {
      name: 'Leidy Gomero',
      status: 'Activo',
      avatar: 'https://i.postimg.cc/KjPzD24G/specialist3.jpg',
    },
  ];

  eliminarChat(user: any): void {
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }
  agregarConversacion() {
    this.addConversationDialogService
      .openDialog()
      .subscribe((selectedContacts) => {
        if (selectedContacts && selectedContacts.length > 0) {
          this.users = [...this.users,...selectedContacts]
        }
      });
  }
  openChatDialog(contact: any) {
    const dialogRef = this.dialog.open(ChatDialogComponent, {
      width: '400px', // Ancho de la ventana emergente
      data: { contact }, // Pasar el contacto seleccionado
    });

    // Opcional: Manejar eventos de cierre de la ventana emergente
    dialogRef.afterClosed().subscribe((result) => {
      console.log('La ventana emergente del chat se cerró', result);
    });
  }
}
