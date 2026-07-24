import { Injectable } from '@angular/core';
import { Observable, forkJoin, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { CourseService } from './course';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  private enrolledCourseIds: number[] = [];

  constructor(private courseService: CourseService) {}

  enroll(courseId: number): void {
    if (!this.enrolledCourseIds.includes(courseId)) {
      this.enrolledCourseIds.push(courseId);
    }
  }

  unenroll(courseId: number): void {
    this.enrolledCourseIds =
      this.enrolledCourseIds.filter(id => id !== courseId);
  }

  isEnrolled(courseId: number): boolean {
    return this.enrolledCourseIds.includes(courseId);
  }

  getEnrolledCourses(): Observable<Course[]> {

    if (this.enrolledCourseIds.length === 0) {
      return of([]);
    }

    return forkJoin(
      this.enrolledCourseIds.map(id =>
        this.courseService.getCourseById(id)
      )
    );

  }

  // Step 87 - switchMap
  getStudentsByCourse(courseId: number): Observable<Course> {
    return of(courseId).pipe(
      switchMap(id => this.courseService.getCourseById(id))
    );
  }

}