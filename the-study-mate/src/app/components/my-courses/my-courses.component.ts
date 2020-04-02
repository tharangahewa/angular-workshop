import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { courseList } from 'src/app/data/courses-list';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CourseEditModalComponent } from './course-edit-modal/course-edit-modal.component';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {
  courses: Course[] = courseList;

  constructor(private modalService: NgbModal) {
    console.log(this.courses);
  }

  ngOnInit(): void {}

  createCourse() {
    this.openModal({
      title: '',
      description: '',
      price: null
    } as Course, 'Create course');  
  }

  onCourseEdit(course: Course) {
    this.openModal( course, 'Edit course');  
  }

  onCourseDelete(course: Course) {
    console.log( course);
  }

  private openModal( course: Course, title: string ) {
    const modalRef = this.modalService.open(CourseEditModalComponent);
    modalRef.componentInstance.modalTitle = title;
    modalRef.componentInstance.course = course;
    modalRef.result.then(
      (value) => console.log( value),
      (reason) => console.log( reason)
    );
  }
}
