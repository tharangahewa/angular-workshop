import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Course } from "../model/course";
import { courses } from "../data/courses";

@Injectable({
  providedIn: "root"
})
export class CoursesStoreService {
  courses = [
    {
      id: this.idGenerator(),
      title: "angular workshop",
      imgUrl: "assets/angular-logo.png",
      price: 50,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
    },
    {
      id: this.idGenerator(),
      title: "angular basic",
      imgUrl: "assets/angular-logo.png",
      price: 60,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
    },
    {
      id: this.idGenerator(),
      title: "angularfire",
      imgUrl: "assets/angular-logo.png",
      price: 40,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
    },
    {
      id: this.idGenerator(),
      title: "angular universal",
      imgUrl: "assets/angular-logo.png",
      price: 30,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
    },
    {
      id: this.idGenerator(),
      title: "angular animations",
      imgUrl: "assets/angular-logo.png",
      price: 45,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
    }
  ];

  coursesObservable: BehaviorSubject<Course[]>;

  constructor() {
    this.coursesObservable = new BehaviorSubject(courses);
  }

  idGenerator(): number {
    return Math.round(Math.random() * 10000);
  }

  getCoursesObservable(): Observable<Course[]> {
    return this.coursesObservable;
  }

  createCourse(course: Course) {
    this.coursesObservable.subscribe(coursesList => {
      const idx = coursesList.findIndex(c => c.id === course.id);
      courses[idx] = course;
    });
  }

  updateCourse(course: Course) {
    this.coursesObservable.subscribe(coursesList => {
      const idx = coursesList.findIndex(c => c.id === course.id);
      courses[idx] = course;
      this.coursesObservable.next(coursesList);
    });
  }

  deleteCourse(course: Course) {}
}
