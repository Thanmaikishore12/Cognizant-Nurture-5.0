import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course';
import { CourseSummaryWidget } from '../../components/course-summary-widget/course-summary-widget';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CourseSummaryWidget
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  totalCourses = 0;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.totalCourses = this.courseService.getCourses().length;
  }

}