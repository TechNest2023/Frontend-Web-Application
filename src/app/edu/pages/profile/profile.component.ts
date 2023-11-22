import {Component, OnInit} from '@angular/core';
import {ProfileService} from "../../services/profile.service";
import {Profile} from "../../model/profile";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Profile | undefined;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    // Aquí puedes obtener el perfil de un usuario específico, quizás usando su ID
    this.getProfileById('idDelUsuario');
  }

  getProfileById(id: string): void {
    this.profileService.getProfileById(id)
      .subscribe((response: Profile) => {
        this.profile = response;
      }, (error) => {
        // Manejo de errores
      });
  }

}
