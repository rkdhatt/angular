import { CoursesService } from './course/courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <button [style.backgroundColor]="isActive ? 'blue' : 'white'"]>Save</button>
    `
})
export class CoursesComponent {
    isActive = true; // if false, then the 'active' class will not show in button.
}