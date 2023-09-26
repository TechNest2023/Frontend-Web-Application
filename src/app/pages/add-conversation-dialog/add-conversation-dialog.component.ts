import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-conversation-dialog',
  templateUrl: './add-conversation-dialog.component.html',
  styleUrls: ['./add-conversation-dialog.component.css'],
})
export class AddConversationDialogComponent {
  searchText = ''; // Variable para almacenar el texto de búsqueda
  contacts = [
    {
      name: 'Melanie Cruz',
      status: 'Activo',
      avatar: 'https://i.postimg.cc/yxMcJkFd/teacher.jpg',
      selected: false,
      occupation: 'Psychology',
    },
    {
      name: 'Jorge Méndez',
      status: 'Activo',
      avatar: 'https://i.postimg.cc/Z5KRpXmm/specialist1.jpg',
      selected: false,
      occupation: 'Education',
    },
    {
      name: 'Mario Castro',
      status: 'Activo',
      avatar: 'https://i.postimg.cc/yx4xRd1p/specialist2.jpg',
      selected: false,
      occupation: 'Education',
    },
  ];
  constructor(
    private dialogRef: MatDialogRef<AddConversationDialogComponent>
  ) {}

  confirmSelection(): void {
    const selectedContacts = this.contacts.filter(
      (contact) => contact.selected
    );
    console.log('Selected: ', selectedContacts);
    this.dialogRef.close(selectedContacts);
  }
  get filteredContacts() {
    return this.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
  eventGetData(user: any) {
    console.log(user);
  }
}
