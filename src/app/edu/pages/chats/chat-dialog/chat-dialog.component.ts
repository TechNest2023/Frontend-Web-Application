import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css'],
})
export class ChatDialogComponent {
  contact: any; // El contacto seleccionado
  newMessage: string = ''; // Nuevo mensaje
  messages: any[] = []; // Lista de mensajes

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ChatDialogComponent>
  ) {
    this.contact = data.contact;
  }

 sendMessage() {
    if (this.newMessage.trim() !== '') {
      // Enviar el mensaje y marcarlo como enviado
      this.messages.push({ text: this.newMessage, sender: 'Tú', sent: true });
      this.newMessage = ''; // Limpiar el campo de entrada

      // Simular una respuesta recibida (puedes reemplazar esto con lógica real)
      setTimeout(() => {
        this.messages.push({
          text: 'Respuesta del destinatario',
          sender: this.contact.name,
          sent: false,
        });
      }, 1000); // Simular un retraso de un segundo para la respuesta
    }
  }


  closeDialog() {
    this.dialogRef.close();
  }
}
