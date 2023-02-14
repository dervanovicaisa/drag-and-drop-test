import { Input } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { OnChanges, Component } from '@angular/core';

@Component({
  selector: 'lib-liner',
  template: `
  <svg #svg>
  <path #path did="curve" d="M0 0" stroke="green" stroke-width="4" stroke-linecap="round" fill="transparent" />
  </svg>
  `,
  styleUrls: ['./line.style.css'],
})
export class LinerComponent implements OnChanges {
  @Input("pointerPosition")
  pointerPosition: { x: number; y: number; } | undefined;
  @Input("distance")
  distance: { x: number; y: number; } | undefined;
  @Input("pointCordinate")
  pointCordinate: {} | undefined;
  @Input("id") id: number | undefined;
  @Input("dotIndex") dotIndex: number | undefined;
  boxs: Array<any> = new Array<any>;
  dots: Array<any> = new Array<any>;
  @ViewChild("path") path: ElementRef;
  @ViewChild("svg") svg: ElementRef;
  constructor(path: ElementRef, svg: ElementRef) {
    this.path = path;
    this.svg = svg;
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    const curr = localStorage.getItem("currValue");
    const prev = localStorage.getItem("prevValue");

    if (simpleChanges["dotIndex"] !== undefined) {
      localStorage.setItem("currValue", simpleChanges["dotIndex"].currentValue);
      localStorage.setItem("prevValue", simpleChanges["dotIndex"].previousValue);
    }
    if (this.id !== undefined) {
      this.storeBox(this.id, Number(curr), Number(prev))
    }
    this.moveAt();

  }

  storeBox(id: number, currId: number, prevId: number) {
    this.dots[currId] = { pointCordinate: this.pointCordinate, pointerPosition: this.pointerPosition, distance: this.distance };
    this.boxs[id] = this.dots;
    this.moveAt();
    this.drawSvg();
  }
  moveAt() {
    this.svg.nativeElement.style.top = 0 + 'px';
    this.svg.nativeElement.style.left = 0 + 'px';
  }
  drawSvg() {
    const p1x = JSON.parse(Object(localStorage.getItem("prevPointCordinate"))).x;
    const p1y = JSON.parse(Object(localStorage.getItem("prevPointCordinate"))).y;

    const p2x = JSON.parse(Object(localStorage.getItem("currPointCordinate"))).x;
    const p2y = JSON.parse(Object(localStorage.getItem("currPointCordinate"))).y;

    const mpx = (p2x + p1x) * 0.5;
    const mpy = (p2y + p1y) * 0.5;

    const theta = Math.atan2(p2y - p1y, p2x - p1x) - Math.PI / 2;

    const offsetX = window.innerWidth - p1x - p2x;
    // const offsetY = window.innerHeight - p1y - p2y;

    const c1x = mpx + offsetX * Math.cos(theta);
    const c1y = mpy + offsetX * Math.sin(theta);

    // const c2x = mpx - offsetY * Math.cos(theta);
    // const c2y = mpy - offsetY * Math.sin(theta);


    const curve = `M ${p1x} ${p1y}  Q${c1x} ${c1y} ${p2x} ${p2y}`;

    this.path.nativeElement.setAttribute("d", curve);
    this.path.nativeElement.style.display = "block";

  }

}
