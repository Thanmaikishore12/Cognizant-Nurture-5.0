import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  isLoading = true;

  courses = [
    {
      id: 1,
      name: 'Angular',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'passed'
    },
    {
      id: 2,
      name: 'Java',
      code: 'JAVA201',
      credits: 3,
      gradeStatus: 'failed'
    },
    {
      id: 3,
      name: 'SQL',
      code: 'SQL301',
      credits: 3,
      gradeStatus: 'pending'
    },
    {
      id: 4,
      name: 'Python',
      code: 'PY401',
      credits: 4,
      gradeStatus: 'passed'
    },
    {
      id: 5,
      name: 'C#',
      code: 'CS501',
      credits: 4,
      gradeStatus: 'pending'
    }
  ];

  selectedCourseId: number | null = null;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }

  // trackBy improves performance by re-rendering only changed items.
  trackByCourseId(index: number, course: any): number {
    return course.id;
  }

}