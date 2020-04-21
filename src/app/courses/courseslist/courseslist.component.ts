import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courseslist',
  templateUrl: './courseslist.component.html',
  styleUrls: ['./courseslist.component.scss']
})
export class CourseslistComponent implements OnInit {
  
  courses$: Observable<any>;

  constructor(private service: CoursesService) {
    this.courses$ = this.service.courses
  }

  ngOnInit(): void {
  }

}
