import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { Course } from '../../models/course.model';
import { Highlight } from '../../directives/highlight';
import { CreditLabel } from '../../pipes/credit-label-pipe';
import { EnrollmentService } from '../../services/enrollment';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    CommonModule,
    Highlight,
    CreditLabel
  ],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {

  @Input() course!: Course;

  @Output() enrollRequested =
    new EventEmitter<number>();

  constructor(
    public enrollmentService: EnrollmentService,
    private router: Router
  ) {}

  toggleEnrollment(): void {

    if (this.enrollmentService.isEnrolled(this.course.id)) {

      this.enrollmentService.unenroll(this.course.id);

    } else {

      this.enrollmentService.enroll(this.course.id);

    }

    this.enrollRequested.emit(this.course.id);

  }

  openDetails(): void {

    this.router.navigate(['/courses', this.course.id]);

  }

}