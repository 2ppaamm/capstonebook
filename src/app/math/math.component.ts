import { Component, OnInit } from '@angular/core';
import {Course} from '../models/course';

@Component({
  selector: 'ng-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent implements OnInit {
  selectedCourse: Course;

  constructor() { }

  ngOnInit() {
  }

  selectCourse(course: Course) {
    this.selectedCourse = course;
  }

}
