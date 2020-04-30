import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormHelper } from '@kikstart/ui';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
model = {email: '', password: ''};
fields = [
  FormHelper.email('email', {required:true}),
  FormHelper.password('password')
]
form= new FormGroup({})
  constructor(private service: AuthService) { }

  ngOnInit(): void {
  }
login(){
  this.service.login(this.model.email, this.model.password)
}
}
