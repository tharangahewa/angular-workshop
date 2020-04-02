import { Component, OnInit } from "@angular/core";
import { Course } from "../../../model/course";
import { CoursesStoreService } from "src/app/service/courses-store.service";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.css"]
})
export class CoursesComponent implements OnInit {
  courses: Course[];

  constructor(private coursesStore: CoursesStoreService) {}

  ngOnInit() {
    this.coursesStore
      .getCourses()
      .subscribe((newCourses: Course[]) => (this.courses = newCourses));
  }

  onCourseSelection(event: Course) {
    console.log(event);
  }
}
