import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider"
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';


import {NgIf, NgStyle, NgFor} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {RegistrationService} from "../../services/auth/registration.service";
import {RegistrationRequest} from "../../services/auth/registrationRequest";


interface Career {
  value: string;
  viewValue: string;
}

interface CareerGroup {
  disabled?: boolean;
  name: string;
  career: Career[];
}


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDividerModule,
    NgIf,
    NgFor,
    NgStyle,
    RouterLink,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
  ],
})
export class RegistrationComponent {
  constructor(private formBuilder: FormBuilder, private router: Router, private registrationService: RegistrationService) { }

  careerControl= new FormControl('');
  careerGroups:CareerGroup[] = [
    {
      name: 'Engineering',
      career: [
        {value: 'software-engineer-0', viewValue: 'Software Engineer'},
        {value: 'aeronautic-engineer-1', viewValue: 'Aeronautic Engineer'},
        {value: 'electrical-engineer-2', viewValue: 'Electrical Engineer'},
      ],
    },
    {
      name: 'Sciences',
      career: [
        {value: 'biology-3', viewValue: 'Biology'},
        {value: 'biotechnology-4', viewValue: 'Biotechnology'},
        {value: 'math-5', viewValue: 'Math'},
      ],
    },
    {
      name: 'Communications',
      career: [
        {value: 'journalist-6', viewValue: 'Journalist'},
        {value: 'marketing-7', viewValue: 'Marketing'},
        {value: 'executive-producer-8', viewValue: 'Executive Producer'},
      ],
    },
  ];

  startDate = new Date(2000, 0, 1);
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  confirmPassword= new FormControl('', [Validators.required]);
  username = new FormControl('', [Validators.required]);
  typeOfUser = new FormControl('', [Validators.required]);
  fullName = new FormControl('', [Validators.required]);
  birthdate = new FormControl('');
  gender = new FormControl('');
  //careerRegister = new FormControl('');
  universityOrInstitute = new FormControl('');



  registrationForm = this.formBuilder.group({
    email: this.email,
    password: this.password,
    confirmPasswordRegister:this.confirmPassword,
    userName: this.username,
    typeOfUser: this.typeOfUser,
    fullName: this.fullName,
    birthdate: this.birthdate,
    gender:this.gender,
    career:this.careerControl,
    universityOrInstitute:this.universityOrInstitute,
  })


  getErrorMessage() {

    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  isRegistered: boolean = false;

  createAccount() {
    if (this.registrationForm.valid) {
      const registrationData: RegistrationRequest = this.registrationForm.value as RegistrationRequest;
      console.log('Registro exitoso:', registrationData);

      this.registrationService.createUser(registrationData).subscribe(
          (response) => {
            // Manejar la respuesta del servidor si es necesario
            console.log('Registro exitoso:', response);
            this.isRegistered = true;
            this.router.navigateByUrl('/log-in');
            this.email.reset();
            this.password.reset();
          },
          (error) => {
            // Manejar errores del servidor
            console.error('Error en el registro:', error);
            alert('Error en el registro. Inténtalo de nuevo más tarde.');
          }
      );
    } else {
      alert('Faltan campos por completar.');
    }
  }

}
