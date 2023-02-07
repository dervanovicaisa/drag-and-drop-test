import { CdkDragMove } from '@angular/cdk/drag-drop';
import { Component, ElementRef, OnInit, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'lib-ng-line',
  templateUrl: './ng-line.template.html',
  styleUrls: ['./line.style.css'],
})
export class NgLineComponent implements OnInit {
  @Input("box") box: ElementRef;
  x: number = 0;
  y: number = 0;
  shiftX: number = 0;
  shiftY: number = 0;
  width: number = 0;
  height: number = 0;
  constructor(private el: ElementRef, box: ElementRef) {
    this.box = box;
  }
  ngOnInit(): void {
  }
  prevElement() {
    console.log("box",this.box)
  }
  moveAt(pageX: number, pageY: number) {
    this.el.nativeElement.style.left = pageX - this.shiftX / 2 + 'px';
    this.el.nativeElement.style.top = pageY - this.shiftY / 2 + 'px';
  }
  drawSvg() {
    this.el.nativeElement.setAttribute("x1", 0);
    this.el.nativeElement.setAttribute("y1", 0);
    this.el.nativeElement.setAttribute("x2", this.x);
    this.el.nativeElement.setAttribute("y2", this.y);
  }
  onMouseDown(event: MouseEvent) {
    this.shiftX = event.clientX - this.el.nativeElement.getBoundingClientRect().left;
    this.shiftY = event.clientY - this.el.nativeElement.getBoundingClientRect().top;
    this.el.nativeElement.style.position = "absolute";
    this.el.nativeElement.style.zIndex = 1000;
    // this.width = this.el.nativeElement.width.animVal.value;
    // this.height = this.el.nativeElement.height.animVal.value;
    this.prevElement();
  }
  onMouseMove(event: MouseEvent) {
    this.moveAt(event.pageX, event.pageY);
  }
  onMouseUp(event: MouseEvent) {
    document.removeEventListener('mousemove', this.onMouseMove);
  }
  onDragStartFun() {
    return false;
  }

}
