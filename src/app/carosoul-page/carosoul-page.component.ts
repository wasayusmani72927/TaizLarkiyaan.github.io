import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-carosoul-page',
  templateUrl: './carosoul-page.component.html',
  styleUrls: ['./carosoul-page.component.scss'],
})
export class CarosoulPageComponent implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  pages = [
    'assets/9.jpg',
    'assets/8.jpg',
    'assets/7.jpg',
    'assets/6.jpg',
    'assets/5.jpg',
    'assets/4.jpg',
    'assets/3.jpg',
    'assets/2.jpg',
    'assets/1.jpg',
  ];
  right: Element[] | null | undefined;
  si!: number;
  z!: number;

  ngAfterViewInit(): void {
    this.right = this.el.nativeElement.querySelectorAll('.right');
    this.si = this.pages.length;
    this.z = 1;
  }

  turnRight() {
    if (!this.right || this.si < 1) return;

    if (this.si >= 1) {
      this.si--;
    } else {
      this.si = this.right.length - 1;
      for (var i = 0; i < this.right.length; i++) {
        this.right[i].className = 'right';
        this.renderer.setStyle(this.right[i], 'zIndex', 'auto');
        this.z = 1;
      }
    }
    this.right[this.si].classList.add('flip');
    this.z++;
    this.renderer.setStyle(this.right[this.si], 'zIndex', this.z);
  }
  turnLeft() {
    if (!this.right || this.si === this.pages.length) return;

    if (this.si < this.right.length) {
      this.si++;
    } else {
      this.si = 1;
      for (var i = this.right.length - 1; i > 0; i--) {
        this.right[i].classList.add('flip');
      }
    }
    this.right[this.si - 1].className = 'right';
    if (this.right && this.right[this.si - 1])
      this.renderer.setStyle(this.right[this.si - 1], 'zIndex', 'auto');
  }
}
