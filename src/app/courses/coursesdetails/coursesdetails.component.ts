import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coursesdetails',
  templateUrl: './coursesdetails.component.html',
  styleUrls: ['./coursesdetails.component.scss']
})
export class CoursesdetailsComponent implements OnInit {

  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
                      (res)=>{
                        console.log(res)
                      }





    )
  }

}
