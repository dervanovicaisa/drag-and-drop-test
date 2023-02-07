import { Component, ElementRef, OnInit, ViewChild, Output } from '@angular/core';
import { BoxConfigModel } from 'src/app/drag-and-drop-w-lines/model/box-config.model';
import { DragAndDropService } from 'src/app/drag-and-drop-w-lines/service/drag-and-drop.service';

@Component({
  selector: 'lib-ng-line',
  templateUrl: './ng-line.template.html',
  styleUrls: ['./line.style.css'],
})
export class NgLineComponent implements OnInit {
  @ViewChild("line") line: ElementRef;
  @ViewChild("linesvg") linesvg: ElementRef;
  x: number = 0;
  y: number = 0;
  shiftX: number = 0;
  shiftY: number = 0;
  width: number = 0;
  height: number = 0;
  counter: number = 10;
  isClicked: boolean = false;
  constructor(private serviceDrag: DragAndDropService, line: ElementRef, linesvg: ElementRef) {
    this.line = line;
    this.linesvg = linesvg;
  }
  ngOnInit(): void {
    this.serviceDrag.box.subscribe((data: BoxConfigModel) => {
      this.moveAt(data.pointCordinate.x, data.pointCordinate.y);
    })
  }

  moveAt(pageX: number, pageY: number) {
    this.linesvg.nativeElement.style.display = "block";
    this.linesvg.nativeElement.style.left = pageX - this.shiftX / 2 + 'px';
    this.linesvg.nativeElement.style.top = pageY - this.shiftY / 2 + 'px';
  }
  drawSvg(x1: number, y1: number) {
    this.line.nativeElement.setAttribute("x2", x1);
    this.line.nativeElement.setAttribute("y2", y1);
    this.line.nativeElement.style.display = "block";
    this.linesvg.nativeElement.style.display = "block";
  }

  changeWidth(event: any) {
    console.log(event);
    this.isClicked = !this.isClicked;
    this.linesvg.nativeElement.style.cursor = "e-resize";

  }

  // (mousedown)="onMouseDown($event)" (mousedown)="onMouseDown($event)" (mouseup)="onMouseUp($event)" (dragstart)="onDragStartFun()" (mousemove)="onMouseMove($event)"
  // onMouseDown(event: MouseEvent) {
  //   this.shiftX = event.clientX - this.linesvg.nativeElement.getBoundingClientRect().left;
  //   this.shiftY = event.clientY - this.linesvg.nativeElement.getBoundingClientRect().top;
  //   this.linesvg.nativeElement.style.display = "block";
  //   this.linesvg.nativeElement.style.position = "absolute";
  //   this.linesvg.nativeElement.style.zIndex = 1000;
  // }
  onMouseMove(event: MouseEvent) {
    if (this.isClicked) {
      this.counter++;
      this.linesvg.nativeElement.style.width = this.counter + "px";
    }

  }
  onMouseUp(event: MouseEvent) {
    this.isClicked = false;
    this.linesvg.nativeElement.style.cursor = "cursor";
    document.removeEventListener('mousemove', this.onMouseMove);
  }
  // onDragStartFun() {
  //   return false;
  // }

}
