import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css'
})
export class CourseDetail implements OnInit {

  course: Course | null = null;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      const id = Number(params.get('id'));

      this.courseService.getCourseById(id).subscribe({

        next: (course) => {
          this.course = course;
          this.errorMessage = '';
        },

        error: () => {
          this.course = null;
          this.errorMessage = 'Course not found.';
        }

      });

    });

  }

  updateCourse(): void {

    if (!this.course) return;

    const updatedCourse: Course = {
      ...this.course,
      name: this.course.name + ' Updated'
    };

    this.courseService.updateCourse(updatedCourse).subscribe({

      next: (course) => {
        this.course = course;
        alert('Course updated successfully!');
      },

      error: (err) => {
        console.error(err);
      }

    });

  }

  deleteCourse(): void {

    if (!this.course) return;

    this.courseService.deleteCourse(this.course.id).subscribe({

      next: () => {
        alert('Course deleted successfully!');
        this.router.navigate(['/courses']);
      },

      error: (err) => {
        console.error(err);
      }

    });

  }

}