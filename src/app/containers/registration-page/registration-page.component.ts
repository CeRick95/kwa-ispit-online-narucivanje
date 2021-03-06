import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  errorText: string;
  show: boolean;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.firstName = '';
    this.lastName = '';
    this.phoneNumber = '';
    this.email = '';
    this.password = '';
    this.errorText = '';
    this.show = false;
  }
  validateEmail(email): boolean {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validatePhoneNumber(phone): boolean {
    const re = /^[+]3816[0-6][0-9]{7}$/;
    return re.test(String(phone).toLowerCase());
  }

  onChange(): void{
    this.show = false;
  }

  async onSubmit(event: Event): Promise<void> {
    console.log('Email: ' + this.email + 'Password: ' + this.password);
    if (this.email === '' || this.password === '' || this.firstName === '' || this.lastName === '' || this.phoneNumber === '') {
      this.errorText = 'All fields are required.';
      this.show = true;
      return;
    } else if (!this.validateEmail(this.email)) {
      this.errorText = 'Please input valid email format';
      this.show = true;
      return;
    } else if (!this.validatePhoneNumber(this.phoneNumber)) {
      this.errorText = 'Please input valid phone number format';
      this.show = true;
      return;
    }
    const exist: boolean = await this.authService.existsByEmail(this.email).then(value => {
      return value;
    });
    if (exist) {
      this.errorText = 'Email already exist in database. Email: ' + this.email;
      this.show = true;
      return;
    }
    const validJson = {
      id: Math.abs(Math.round(Math.random() * 1000)),
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      phone: this.phoneNumber
    };
    this.authService.registration(validJson);
    event.preventDefault();
  }
}
