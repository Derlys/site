import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormHelper } from '@kikstart/ui';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  model = { email: '', password: '' };
  fields = [FormHelper.email('email', { required: true }), FormHelper.password('password')];
  form = new FormGroup({});
  constructor(private router: Router, private service: AuthService) {}

  ngOnInit(): void {}
  login() {
    this.service.login(this.model.email, this.model.password).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/']);
    });
  }

  loginGithub() {
    this.service.loginGithub().subscribe((res) => {
      console.log(res);
      this.router.navigate(['/']);
    });
  }

  loginGoogle() {
    this.service.loginGoogle().subscribe((res) => {
      console.log(res);
      this.router.navigate(['/']);
    });
  }
}
