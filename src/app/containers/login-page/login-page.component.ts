import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

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

  constructor(private authService: AuthService) { }

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
    if (this.email === '' || this.password === ''){
      this.errorText = 'All fields are required';
      this.show = true;
      return;
    }else if (!this.validateEmail(this.email)){
      this.errorText = 'Please input valid email format';
      this.show = true;
      return;
    }
    this.authService.login(this.email, this.password);
    event.preventDefault();
  }

}
