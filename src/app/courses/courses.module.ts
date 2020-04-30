import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseslistComponent } from './courseslist/courseslist.component';
import { CoursesdetailsComponent } from './coursesdetails/coursesdetails.component';
import { RouterModule } from '@angular/router';
import { routes } from './courses.routes';

@NgModule({
  declarations: [
    CourseslistComponent,
    CoursesdetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild (routes),

  ],
  exports: [
  CourseslistComponent,
  CoursesdetailsComponent
  ]
})
export class CoursesModule { }
