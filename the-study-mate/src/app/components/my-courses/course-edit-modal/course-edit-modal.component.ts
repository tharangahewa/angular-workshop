import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/models/course';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-course-edit-modal',
  templateUrl: './course-edit-modal.component.html',
  styleUrls: ['./course-edit-modal.component.css']
})
export class CourseEditModalComponent implements OnInit {
  @Input() modalTitle: string;
  @Input() course: Course;

  formGroup: FormGroup; 

  constructor(private activeModal: NgbActiveModal, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group( this.course );
  }

  onSave() {
    this.activeModal.close(this.formGroup.value);
  }

  onClose() {
    this.activeModal.dismiss('dismiss');
  }
}
