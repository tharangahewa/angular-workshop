import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Course } from "src/app/model/course";

@Component({
  selector: "app-course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.css"]
})
export class CourseComponent implements OnInit {
  @Input() course: Course;
  @Input() editable = false;
  @Output() courseSelected = new EventEmitter<Course>();
  @Output() courseEdited = new EventEmitter<Course>();
  @Output() courseRemoved = new EventEmitter<Course>();

  constructor() {}

  ngOnInit() {}

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
}
