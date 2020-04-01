import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/models/course';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-course-edit-modal',
  templateUrl: './course-edit-modal.component.html',
  styleUrls: ['./course-edit-modal.component.css']
})
export class CourseEditModalComponent implements OnInit {
  @Input() modalTitle: string;
  @Input() course: Course;

  constructor(private activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    console.log(this.course);
  }

  onSave() {
    this.activeModal.close(this.course);
  }

  onClose() {
    this.activeModal.dismiss("dismiss");
  }
}
