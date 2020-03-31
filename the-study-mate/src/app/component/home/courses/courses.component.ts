import { Component, OnInit } from '@angular/core';
import { Course } from '../../../model/course';
import { courses } from '../../../data/courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = courses;

  constructor() {
  }

  ngOnInit() {
  }

  onCourseSelection(event: Course) {
    console.log(event);
  }
}
