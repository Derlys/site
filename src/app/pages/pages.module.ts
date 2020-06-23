import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UiHeroModule } from '@kikstart/ui';

@NgModule({
  declarations: [HomeComponent, AboutComponent, ContactComponent],
  imports: [CommonModule, UiHeroModule],
  exports: [HomeComponent, AboutComponent, ContactComponent],
})
export class PagesModule {}
