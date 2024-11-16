import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  constructor(private scroller: ViewportScroller) {}
  scrollToTop() {
    this.scroller.scrollToPosition([0, 0]);
  }
}
