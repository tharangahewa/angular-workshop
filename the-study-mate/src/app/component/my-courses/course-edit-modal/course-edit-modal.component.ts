import { Component, OnInit, Input } from "@angular/core";
import { Course } from "src/app/model/course";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-course-edit-modal",
  templateUrl: "./course-edit-modal.component.html",
  styleUrls: ["./course-edit-modal.component.css"]
})
export class CourseEditModalComponent implements OnInit {
  @Input() course: Course;
  @Input() title: string;

  constructor(private activeModal: NgbActiveModal) {}

  ngOnInit(): void {}

  onSave() {
    this.activeModal.close(this.course);
  }

  onClose() {
    this.activeModal.dismiss("dismissed");
  }
}
