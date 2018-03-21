import { CoursesService } from './course/courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        {{ course.title | uppercase | lowercase }} <br/>
        {{ course.rating | number:'1.2-2' }} <br/>
        {{ course.students | number }} <br/>
        {{ course.price | currency:'AUD' :true }} <br/>
        {{ course.releaseDate | date:'shortDate' }} <br/>
    `
})
export class CoursesComponent {
    course = {
        title: "Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }      
}