import { Component, OnInit, Input } from "@angular/core";
import { Course } from "src/app/model/course";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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
    this.formGroup = this.formBuilder.group({
      title: [this.course.title, Validators.required],
      description: [this.course.description, Validators.required],
      price: [this.course.price, Validators.required],
      imgUrl: [this.course.imgUrl]
    });
  }

  onSave(course: Course) {
    this.activeModal.close(course);
  }

  onClose() {
    this.activeModal.dismiss("dismissed");
  }
}
