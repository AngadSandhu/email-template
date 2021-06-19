import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appReadMail]'
})
export class ReadMailDirective {
  @HostListener('click') onClick() {
    let header = this.elementRef.nativeElement.querySelector('.mat-card-header')||null;
    let dot = this.elementRef.nativeElement.querySelector('.green-dot')|| null;
    if(!!header || !!dot){
      this.renderer.removeChild(header,dot);
    }
  }
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

}
