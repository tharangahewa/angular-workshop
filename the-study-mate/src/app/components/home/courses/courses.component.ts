import { Component, OnInit } from '@angular/core';
import { Course } from '../../../models/course';
import { courseList } from '../../../data/courses-list';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = courseList;

  constructor() { }

  ngOnInit(): void {
  }

  onCourseSelect(course: Course){
    alert( "Course selected " + course.title);
  }
}
