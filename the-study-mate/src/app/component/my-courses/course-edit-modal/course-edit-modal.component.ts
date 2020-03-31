import { Component, OnInit, Input } from "@angular/core";
import { Course } from "src/app/model/course";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, FormGroup } from "@angular/forms";
import { courses } from "src/app/data/courses";

@Component({
  selector: "app-course-edit-modal",
  templateUrl: "./course-edit-modal.component.html",
  styleUrls: ["./course-edit-modal.component.css"]
})
export class CourseEditModalComponent implements OnInit {
  @Input() course: Course;
  @Input() title: string;

  formGroup: FormGroup;

  constructor(
    private activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group(this.course);
  }

  onSave(course: Course) {
    this.activeModal.close(course);
  }

  onClose() {
    this.activeModal.dismiss("dismissed");
  }
}
