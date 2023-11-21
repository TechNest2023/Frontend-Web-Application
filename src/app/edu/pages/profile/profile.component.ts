import {Component, OnInit} from '@angular/core';
import {ProfileService} from "../../services/profile.service";
import {Profile} from "../../model/profile";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  profileId = '1'; // Simulación de un ID de perfil
  profile: Profile | undefined;
  maskedPassword = '';

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(): void {
    this.profileService.getProfileById(this.profileId)
      .subscribe((profile: Profile) => {
        this.profile = profile;
        // Máscara de la contraseña (solo un ejemplo, debe manejarse de forma segura)
        this.maskedPassword = '*'.repeat(this.profile.password.length);
      });
  }
}
