import { CoursesService } from './course/courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
    `
})
export class CoursesComponent {
    title = "List of courses";
    courses;

    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }
    // Logic for calling an HTTP service within component
    // Issues with this approach:
    // 1. Logic will tightly couple the component with the HTTP endpoint. Not good for unit tests.
    // 2. courses may be part of another page (ex: dashboard) -- causes repeating in multiple places
    // 3. Component should not include any other logic besides presentation related logic.
    // Solution: created separate Service class.
}