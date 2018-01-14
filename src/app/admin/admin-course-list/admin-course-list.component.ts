import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Course } from '../../models/course';
import {CourseService} from '../../services/course.service';

@Component({
  selector: 'ng-admin-course-list',
  templateUrl: './admin-course-list.component.html',
  styleUrls: ['./admin-course-list.component.css']
})
export class AdminCourseListComponent implements OnInit {
  courses: Observable<Course[]>;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courses = this.courseService.getCourses();
  }

}
