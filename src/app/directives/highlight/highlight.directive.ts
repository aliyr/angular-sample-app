import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') highlightColor: string;

  @HostListener('mousedown') onMouseDown() {
    this.highlight(this.highlightColor || 'red');
  }
  @HostListener('mouseup') onMouseUp() {
    this.highlight('blue');
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
  constructor(public el: ElementRef) {}

}
