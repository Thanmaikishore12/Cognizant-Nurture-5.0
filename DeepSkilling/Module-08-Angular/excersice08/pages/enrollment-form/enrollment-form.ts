import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

import { CourseService } from '../../services/course';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './enrollment-form.html',
  styleUrl: './enrollment-form.css'
})
export class EnrollmentForm {

  studentName = '';
  studentEmail = '';
  courseId: number | null = null;
  preferredSemester = '';
  agreeToTerms = false;

  submitted = false;

  constructor(private courseService: CourseService) {}

  onSubmit(form: NgForm): void {

    if (form.invalid || this.courseId === null) {
      return;
    }

    const course = {
      name: this.studentName,
      code: `COURSE-${this.courseId}`,
      credits: 3,
      gradeStatus: 'pending' as const
    };

    this.courseService.createCourse(course).subscribe({

      next: () => {
        this.submitted = true;
        alert('Course created successfully!');
        form.resetForm();
      },

      error: (err) => {
        console.error(err);
        alert('Failed to create course.');
      }

    });

  }

  resetForm(form: NgForm): void {
    form.resetForm();
    this.submitted = false;
  }

}