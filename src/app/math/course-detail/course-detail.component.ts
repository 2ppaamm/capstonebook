import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../../models/course';

@Component({
  selector: 'ng-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  @Input() selectedCourse: Course;

  constructor() { }

  ngOnInit() {
  }

}
