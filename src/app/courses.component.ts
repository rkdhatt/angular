import { CoursesService } from './course/courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <input #email (keyup.enter)="onKeyUp(email.value)"/>
    ` // the event will be called only when keup.enter is recognized.
})
export class CoursesComponent {
    onKeyUp(email){
        console.log(email); // get the value entered in input (can also do $event.target.value).
        // Template variables can help simplify code.
    }       
}