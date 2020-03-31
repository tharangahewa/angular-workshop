import { Component, OnInit } from "@angular/core";
import { courses, idGenerator } from "src/app/data/courses";
import { Course } from "src/app/model/course";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CourseEditModalComponent } from "./course-edit-modal/course-edit-modal.component";

@Component({
  selector: "app-my-courses",
  templateUrl: "./my-courses.component.html",
  styleUrls: ["./my-courses.component.css"]
})
export class MyCoursesComponent implements OnInit {
  courses = courses;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    console.log(courses);
  }

  onCreateCourse() {
    const newCourse = { 
      id: idGenerator(), 
      title: '',
      description: '',
      price: 0,
      imgUrl: ''
    } as Course;
    this.openModal(newCourse, "Create Course").then(
      result => {
        console.log(result);
        courses.push(result);
      },
      reason => console.log(reason)
    );
  }

  onCourseEdit(course: Course) {
    this.openModal(course, "Edit Course").then(
      result => {
        console.log(result);
        const idx = courses.findIndex(c => c.id === result.id);
        courses[idx] = result;
      },
      reason => console.log(reason)
    );
  }

  private openModal(course: Course, title: string) {
    const modalRef = this.modalService.open(CourseEditModalComponent);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.course = course;
    return modalRef.result;
  }

  onCourseRemove(course: Course) {}
}
