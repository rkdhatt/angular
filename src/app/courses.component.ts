import { CoursesService } from './course/courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        {{ text | summary:10 }}
    `
})
export class CoursesComponent {
   text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius tempus imperdiet. Vivamus egestas consectetur mollis. Sed et neque enim. Aenean eros massa, condimentum at nibh sit amet, euismod ornare dui. Ut porta auctor nulla, a euismod nibh maximus sed. Nam suscipit erat id felis molestie fringilla. Proin quis dolor congue, ultrices lacus ac, euismod dui. Quisque mattis erat vitae libero fermentum sollicitudin. Suspendisse potenti. Praesent at erat quis magna varius pharetra et quis mi. Proin efficitur gravida ultricies. Aenean vel accumsan mauris. In ac metus sed lectus mollis venenatis gravida a lorem. Curabitur blandit mollis metus tempus rutrum.';     
}