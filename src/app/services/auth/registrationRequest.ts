import {LoginRequest} from './loginRequest';

export interface RegistrationRequest extends LoginRequest {
  fullname: string;
  confirmPassword: string;
  typeOfUser: string;
  birthdate: Date;
  gender: string;
  career: string;
  universityOrInstitute: string;
}
