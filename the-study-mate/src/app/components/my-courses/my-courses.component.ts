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
    this.openModal(
      {
        title: '',
        description: '',
        price: null
      } as Course,
      'Create course'
    ).then(
      value => {
        this.courses.push(value);
      },
      reason => console.log(reason)
    );
  }

  onCourseEdit(course: Course) {
    this.openModal(course, 'Edit course').then(
      modifiedCourse => {
        const idx = this.courses.findIndex(
          thisCourse => course.id === thisCourse.id
        );
        this.courses[idx] = modifiedCourse;
      },
      reason => console.log(reason)
    );
  }

  onCourseDelete(course: Course) {
    console.log('onCourseDelete');
    const idx = this.courses.findIndex(
      thisCourse => course.id === thisCourse.id
    );
    this.courses.splice(idx, 1);
  }

  private openModal(course: Course, title: string): Promise<any> {
    const modalRef = this.modalService.open(CourseEditModalComponent);
    modalRef.componentInstance.modalTitle = title;
    modalRef.componentInstance.course = course;
    return modalRef.result;
  }
}
