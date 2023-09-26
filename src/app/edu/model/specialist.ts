
export class Specialist {
  id: number;
  image: string;
  fullname: string;
  age: number;
  career: string;
  specialization: string;
  topics: string[];
  language: string;
  nationality: string;

  constructor() {
    this.id = 0;
    this.image = '';
    this.fullname = '';
    this.age = 0;
    this.career = '';
    this.specialization = '';
    this.topics = [''];
    this.language = '';
    this.nationality = '';
  }
}
