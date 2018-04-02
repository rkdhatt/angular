import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('appInputFormat') format; // can use directive's selector as an alias for input property
  constructor(private el: ElementRef) // angular ref that gives access to dom objects
  { 
    
  }

  // When focus is lost, convert input text to lower case.
  @HostListener('blur') onBlur(){
    let value = this.el.nativeElement.value; // access to dom property
    
    if (this.format == 'lowercase')
      this.el.nativeElement.value = value.toLowerCase();
    else
      this.el.nativeElement.value = value.toUpperCase();
  }

}
