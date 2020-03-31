import { Component, OnInit } from "@angular/core";
import { courses } from "src/app/data/courses";
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
    const modalRef = this.modalService.open(CourseEditModalComponent);
    modalRef.componentInstance.title = "Create Course";
    modalRef.componentInstance.course = {} as Course;
    modalRef.result.then(
      result => console.log(result),
      reason => console.log(reason)
    );
  }

  onCourseEdit(course: Course) {
    const modalRef = this.modalService.open(CourseEditModalComponent);
    modalRef.componentInstance.title = "Edit Course";
    modalRef.componentInstance.course = course;
    modalRef.result.then(
      result => console.log(result),
      reason => console.log(reason)
    );
  }

  onCourseRemove(course: Course) {}
}
