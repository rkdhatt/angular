import { CoursesService } from './course/courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
    ` // the event will be called only when keup.enter is recognized.
    // [()] is a two-way binding syntax in angular.
    // Better than this approach: <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()"/>
})
export class CoursesComponent {
    email = "me@example.com";
    onKeyUp(){
        console.log(this.email); // get the value entered in input (can also do $event.target.value).
        // Template variables can help simplify code.
    }       
}