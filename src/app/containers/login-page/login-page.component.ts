import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  email: string;
  password: string;
  errorText: string;
  show: boolean;

  constructor() { }

  ngOnInit(): void {
    this.email = '';
    this.password = '';
    this.show = false;
  }

   validateEmail(email): boolean {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  onChange(): void{
    this.show = false;

  }

  onSubmit(event: Event): void{
    console.log('Email: ' + this.email + 'Password: ' + this.password);
    if (this.email === '' || this.password === ''){
      this.errorText = 'All fields are required';
      this.show = true;
      return;
    }else if (!this.validateEmail(this.email)){
      this.errorText = 'Please input valid email format';
      this.show = true;
      return;
    }
    event.preventDefault();
  }

}
