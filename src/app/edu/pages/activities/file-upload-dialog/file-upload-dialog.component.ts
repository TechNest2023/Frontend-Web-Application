import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-file-upload-dialog',
  templateUrl: './file-upload-dialog.component.html',
  styleUrls: ['./file-upload-dialog.component.css'],
})
export class FileUploadDialogComponent {
  selectedFile: File | undefined;
  constructor(private dialogRef: MatDialogRef<FileUploadDialogComponent>) {}

  openFileInput(fileInput: HTMLInputElement): void {
    if (fileInput) {
      fileInput.click();
    }
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  uploadFile(): void {
    this.dialogRef.close(this.selectedFile);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
