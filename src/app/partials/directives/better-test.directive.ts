import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterTest]'
})
export class BetterTestDirective implements OnInit{

  @Input('defaultColor') defaultColor: string = 'transparent';
  // @Input('hilightColor') hilightColor: string = 'blue';
  @Input('appBetterTest') hilightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor:string = '';

  constructor(
    private elementRef:ElementRef,
    private renderer: Renderer2
  ) { }

  //NOTE: optional flags are like !important
  ngOnInit(): void {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter')
  mouseOver(e: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    // this.backgroundColor = 'blue';
    this.backgroundColor = this.hilightColor;
  }

  @HostListener('mouseleave')
  mouseOut(e: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    // this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;

  }
}
