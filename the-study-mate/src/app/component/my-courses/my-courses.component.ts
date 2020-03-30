import { Component, OnInit } from '@angular/core';
import { courses } from 'src/app/data/courses';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {

  courses = courses;

  constructor() { }

  ngOnInit() {
    console.log( courses);
  }

}
