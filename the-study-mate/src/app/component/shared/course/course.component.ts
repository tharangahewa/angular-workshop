import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  DoCheck
} from "@angular/core";
import { Course } from "src/app/model/course";

const DEBUG = false;

@Component({
  selector: "app-course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.css"]
})
export class CourseComponent
  implements OnInit, AfterViewInit, OnDestroy, DoCheck {
  @Input() course: Course;
  @Input() editable = false;
  @Output() courseSelected = new EventEmitter<Course>();
  @Output() courseEdited = new EventEmitter<Course>();
  @Output() courseRemoved = new EventEmitter<Course>();
  

  //Ready in terms of Typescript
  constructor(private el: ElementRef<HTMLElement>) {
    this.logIt("constructor");
  }

  //Ready in terms of Angular framework
  ngOnInit() {
    this.logIt("ngOnInit");
    // console.log("ngOnInit");

    if (DEBUG) {
      setInterval(() => {
        this.course = Object.assign({}, this.course);
        this.course.price = Math.round(Math.random() * 100);
      }, 2000);
    }
  }

  ngDoCheck(): void {
    this.logIt("ngDoCheck");
  }

  ngAfterViewInit(): void {
    this.logIt("ngAfterViewInit");
  }

  ngOnDestroy(): void {
    this.logIt("ngOnDestroy");
  }

  onClick(event: Event) {
    event.preventDefault();
    this.courseSelected.emit(this.course);
  }

  onEdit() {
    this.courseEdited.emit(this.course);
  }

  onRemove() {
    this.courseRemoved.emit(this.course);
  }

  logIt(checkpoint: string) {
    if (DEBUG) {
      console.log(
        "args at " + checkpoint + " - " + JSON.stringify(this.course)
      );
      console.log(
        "view at " + checkpoint + " - " + this.el.nativeElement.textContent
      );
    }
  }
}
