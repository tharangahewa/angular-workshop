import { Component, OnInit } from "@angular/core";
import { courses, idGenerator } from "src/app/data/courses";
import { Course } from "src/app/model/course";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CourseEditModalComponent } from "./course-edit-modal/course-edit-modal.component";

const DEBUG = false;

@Component({
  selector: "app-my-courses",
  templateUrl: "./my-courses.component.html",
  styleUrls: ["./my-courses.component.css"]
})
export class MyCoursesComponent implements OnInit {
  courses = courses;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    if (DEBUG) {
      this.courses = [...courses].splice(0, 1);
      setInterval(() => {
        this.courses = [...courses].splice(
          Math.floor(Math.random() * courses.length),
          1
        );
      }, 2000);
    }

    // setInterval(() => {
    //   const arrayCopy = [...this.courses];
    //   arrayCopy.push(courses[0])
    //   this.courses = arrayCopy
    //   console.log(arrayCopy);
    // }, 5000);
  }

  onCreateCourse() {
    const newCourse = {
      id: idGenerator(),
      title: "",
      description: "",
      price: 0,
      imgUrl: ""
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

  onCourseRemove(course: Course) {
    this.courses.splice(
      this.courses.findIndex(c => course.id === c.id),
      1
    );
  }
}
