import { Routes } from '@angular/router';

import { CoursesdetailsComponent } from './coursesdetails/coursesdetails.component';
import { CourseslistComponent } from './courseslist/courseslist.component';

export const routes: Routes = [

    {
        path: ':id',
        component: CoursesdetailsComponent
      },
      {
        path: '',
        component: CourseslistComponent
      }
    ];
