import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course = {
    title: 'angular workshop',
    imgUrl: 'assets/angular-logo.png',
    price: 50,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
    starRating: 4.2,

  };

  constructor() {
  }

  ngOnInit() {
  }

  onClick( event: Event) {
    alert('You clicked ' + this.course.title);
    console.log( event);
  }
}
