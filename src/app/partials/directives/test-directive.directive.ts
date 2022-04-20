import { Directive, ElementRef, OnInit } from '@angular/core';

//NOTE: the square brackets mean I don't need square brackets on the element 
@Directive({
  selector: '[appTestDirective]'
})
export class TestDirectiveDirective implements OnInit{

  constructor(private elementRef:ElementRef) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }

}
