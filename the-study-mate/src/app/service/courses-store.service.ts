import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Course } from "../model/course";

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
    this.coursesObservable = new BehaviorSubject(this.courses);
  }

  idGenerator(): number {
    return Math.round(Math.random() * 10000);
  }

  getCoursesObservable(): Observable<Course[]> {
    return this.coursesObservable;
  }

  createCourse(course: Course) {
    this.courses.push(course);
    this.coursesObservable.next([...this.courses]);
  }

  updateCourse(course: Course) {
    const idx = this.courses.findIndex(c => c.id === course.id);
    this.courses[idx] = course;
    this.coursesObservable.next([...this.courses]);
  }

  deleteCourse(course: Course) {
    const idx = this.courses.findIndex(c => c.id === course.id);
    this.courses.splice(idx,1);
    this.coursesObservable.next([...this.courses]);
  }
}
