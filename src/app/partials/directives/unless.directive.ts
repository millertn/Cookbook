import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  // NOTE: creating my own "structural" directive (the one with the star)

  @Input('appUnless') set unless (condition:boolean) {
    if (!condition) {
      this.viewRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewRef.clear();
    }
  }

  constructor(
    private templateRef:TemplateRef<any>,
    private viewRef:ViewContainerRef
  ) { }

}
