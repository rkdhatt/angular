import { CoursesService } from './course/courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
    <div (click)='onDivClick($event)'>
        <button (click)="onSave($event)">Save</button>
    </div>
    `
})
export class CoursesComponent {
    onDivClick($event){
        console.log("Div was clicked", $event);
    }
    onSave($event){
        $event.stopPropagation(); // stops this event from bubbling up in DOM (i.e. won't see consol log from here)
        console.log("Button was clicked", $event);
    }        
}