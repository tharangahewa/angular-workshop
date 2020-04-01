import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { courseList } from 'src/app/data/courses-list';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {

  courses: Course[] = courseList;

  constructor() {
    console.log( this.courses);
   }

  ngOnInit(): void {

  }


}
