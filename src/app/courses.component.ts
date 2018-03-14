import { CoursesService } from './course/courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <input (keyup.enter)="onKeyUp($event)"/>
    ` // the event will be called only when keup.enter is recognized.
})
export class CoursesComponent {
    onKeyUp($event){
        console.log("ENTER was pressed");
    }       
}