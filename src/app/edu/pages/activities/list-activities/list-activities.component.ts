import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FileUploadDialogComponent } from '../file-upload-dialog/file-upload-dialog.component';

@Component({
  selector: 'app-list-activities',
  templateUrl: './list-activities.component.html',
  styleUrls: ['./list-activities.component.css'],
})
export class ListActivitiesComponent {
  activities = [
    {
      title: 'Revisión bibliográfica',
      specialist: 'María Fernández',
      details:
        'https://drive.google.com/file/d/1-wsV_vy5M2chaJE7RqMYotfqCTDo9lfU/view',
      expiration_date: '10/10/2023',
      expiration_time: '09:00 p.m',
      start_date: '01/10/2023',
      start_time: '09:00 p.m',
      attempts_number: 1,
    },
    {
      title: 'Elaboración de conclusiones',
      specialist: 'María Fernández',
      details:
        'https://drive.google.com/file/d/1-wsV_vy5M2chaJE7RqMYotfqCTDo9lfU/view',
      expiration_date: '10/10/2023',
      expiration_time: '09:00 p.m',
      start_date: '01/10/2023',
      start_time: '09:00 p.m',
      attempts_number: 1,
    },
    {
      title: 'Diseño de un protocolo de investigación',
      specialist: 'María Fernández',
      details:
        'https://drive.google.com/file/d/1-wsV_vy5M2chaJE7RqMYotfqCTDo9lfU/view',
      expiration_date: '10/10/2023',
      expiration_time: '09:00 p.m',
      start_date: '01/10/2023',
      start_time: '09:00 p.m',
      attempts_number: 1,
    },
  ];
  constructor(private dialog: MatDialog) {}
  openFileUploadDialog(activity:any): void {
    const dialogRef = this.dialog.open(FileUploadDialogComponent, {
      width: '400px',
      data: {
        deleteActivity: this.removeActivity,
        activitySelectioned: activity
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.removeActivity(activity);
        console.log('Archivo subido:', result);
      }
    });
  }
  removeActivity(activity: any): void {
    const index = this.activities.indexOf(activity);
    if (index !== -1) {
      this.activities.splice(index, 1);
    }
  }
}
