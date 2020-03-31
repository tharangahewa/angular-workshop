import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input() course: Course ;

  @Output() courseSelected = new EventEmitter<Course>(); 

  constructor() { }

  ngOnInit(): void {
    // setInterval( ()=> {
    //   this.course.price = Math.round( Math.random() * 100);
    // }, 2000);
  }

  onClick(event: Event){
    this.course.price += 10;
    this.courseSelected.emit( this.course ); 
  }

}
