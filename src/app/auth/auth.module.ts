import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { routes } from './auth.routes';
import { UiFormModule } from '@kikstart-ui/ui-form';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, LogoutComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UiFormModule],
  exports: [LoginComponent, RegisterComponent],
})
export class AuthModule {}
