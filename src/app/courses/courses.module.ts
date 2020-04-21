import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseslistComponent } from './courseslist/courseslist.component';
import { CoursesdetailsComponent } from './coursesdetails/coursesdetails.component';
import { RouterModule } from '@angular/router';
import { routes } from './courses.routes';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    CourseslistComponent,
    CoursesdetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild (routes),
   
  ],
  exports:[
  CourseslistComponent,
  CoursesdetailsComponent
  ]
})
export class CoursesModule { }
