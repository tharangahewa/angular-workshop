import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  //model
  course = {
    title: 'Angular Workshop',
    imgUrl: 'assets/angular-3-logo.png',
    price: 50,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
    starRating: 4
  }

  constructor() { }

  ngOnInit(): void {
    setInterval( ()=> {
      this.course.price = Math.round( Math.random() * 100);
    }, 2000);
  }

  onClick(event: Event){
    this.course.price += 10;
  }

}
