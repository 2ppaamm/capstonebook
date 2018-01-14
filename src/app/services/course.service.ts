import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Course} from '../models/course';

@Injectable()
export class CourseService {

  constructor(private http: HttpClient) {
  }

  getCourses(): Observable<any> {
    return this.http.get('http://localhost/courses')
      .map((response) => response);
  }

  addCourse(course: Object): Observable<Course[]> {
    return this.http.post('http://localhost/courses', course)
      .map((response) => response)
      .catch((error: any) => Observable.throw(error.json().error || {message: 'Server Error'} ));
  }

  getCourse(id: String): Observable<any> {
    return this.http.get('http://localhost/courses/' + id)
      .map((response) => response);
  }

  updateCourse(course: Object): Observable<Course[]> {
    const apiUrl = 'http://localhost/courses';
    const url = `${apiUrl}/${course['id']}`;
    return this.http.put(url, course)
      .map((response) => response)
      .catch((error: any) => Observable.throw(error.error || {message: 'Server Error'}));
  }

  deleteCourse(id: String): Observable<Course[]> {
    const apiUrl = 'http://localhost/courses';
    const url = `${apiUrl}/${id}`;
    return this.http.delete(url)
      .map((response) => response)
      .catch((error: any) => Observable.throw(error.json().error || {message: 'Server Error'}));
  }
}
