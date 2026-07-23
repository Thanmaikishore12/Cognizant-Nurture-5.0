import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CourseCard } from '../../components/course-card/course-card';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  courses: Course[] = [];
  isLoading = false;
  selectedCourseId?: number;
  searchTerm = '';

  constructor(
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.isLoading = true;

    this.courses = this.courseService.getCourses();

    this.isLoading = false;

    const search = this.route.snapshot.queryParamMap.get('search');

    if (search) {
      this.searchTerm = search;
    }
  }

  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }

  onEnroll(courseId: number) {
    this.selectedCourseId = courseId;
  }

  openCourse(course: Course) {
    this.router.navigate(['courses', course.id]);
  }

  search() {
    this.router.navigate(['courses'], {
      queryParams: {
        search: this.searchTerm
      }
    });
  }

}