import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddConversationDialogComponent } from 'src/app/edu/pages/chats/add-conversation-dialog/add-conversation-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class AddConversationDialogService {
  constructor(private dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(AddConversationDialogComponent, {
      width: '400px', // Ancho deseado del cuadro de diálogo
    });

    return dialogRef.afterClosed();
  }
}
