import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-coursesdetails',
  templateUrl: './coursesdetails.component.html',
  styleUrls: ['./coursesdetails.component.scss']
})
export class CoursesdetailsComponent implements OnInit {

  courses$: Observable<any>;

  // tslint:disable-next-line: variable-name
  constructor(public _servicio: CoursesService) {

    this.courses$ = this._servicio.courses;

  }

  ngOnInit(): void {

  }
}


