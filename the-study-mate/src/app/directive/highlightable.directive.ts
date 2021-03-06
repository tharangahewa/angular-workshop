import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightable]'
})
export class HighlightableDirective {

  @Input() appHighlightableClass: string;

  constructor(private el: ElementRef<HTMLElement>,
              private renderer: Renderer2) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.el.nativeElement, this.appHighlightableClass);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement, this.appHighlightableClass);
  }

}
