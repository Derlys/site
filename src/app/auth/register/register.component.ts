import { FormGroup } from '@angular/forms';
import { FormHelper } from '@kikstart/ui';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  model = {email: '', name: '', password: ''};
  fields = [
    FormHelper.email('email',{required: true}),
    FormHelper.input('name', {label: 'Name', required: true}),
    FormHelper.password('password')
  ];
  form = new FormGroup({});
  
  constructor(private service: AuthService) { }

  ngOnInit(): void {
  }
  register(){
    this.service.register(this.model.email, this.model.name, this.model.password);
  }

  }


