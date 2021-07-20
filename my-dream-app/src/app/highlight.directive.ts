import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[ambHighlight]'
})
export class HighlightDirective {

  @HostBinding('class.text-danger') isHighlightedText;
  @HostBinding('class.border-danger') isHighlightedBorder;
  @HostBinding('class.text-dark') isHovered;

  @HostListener('mouseenter') colorize() {
    if (this.isHighlighted) {
      this.isHovered = true;
    }
  }
  @HostListener('mouseleave') decolorize() {
    if (this.isHighlighted) {
      this.isHovered = false;
    }
  }

  @Input('ambHighlight') set highlight(value: boolean) {
    this.isHighlighted = value;
  }

  set isHighlighted(value: boolean) {
    this.isHighlightedText = this.isHighlightedBorder = value;
  }
  get isHighlighted() {
    return this.isHighlightedText && this.isHighlightedBorder;
  }

  constructor() {}
}
