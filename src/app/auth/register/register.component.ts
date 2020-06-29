import { FormGroup } from '@angular/forms';
import { FormHelper } from '@kikstart-ui/ui-form';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  model = { email: '', name: '', password: '' };
  fields = [FormHelper.email('email', { required: true }), FormHelper.password('password')];
  form = new FormGroup({});

  constructor(private service: AuthService) {}

  ngOnInit(): void {}
  register() {
    this.service.register(this.model.email, this.model.password).subscribe((res) => {
      console.log(res);
    });
  }
}
