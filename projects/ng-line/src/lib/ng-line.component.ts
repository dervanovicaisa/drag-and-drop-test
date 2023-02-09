import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BoxConfigModel } from 'src/app/drag-and-drop-w-lines/model/box-config.model';
import { DragAndDropService } from 'src/app/drag-and-drop-w-lines/service/drag-and-drop.service';

@Component({
  selector: 'lib-ng-line',
  templateUrl: './ng-line.template.html',
  styleUrls: ['./line.style.css'],
})
export class NgLineComponent implements OnInit {
  // path child
  @ViewChild("line") line: ElementRef;
  // svg
  @ViewChild("linesvg") linesvg: ElementRef;
  // current width of svg, path
  counter: number = 0;
  // for resizing line flag
  isClicked: boolean = false;
  offsetLeft: number = 0;
  offsetWidth: number = 0;
  constructor(private serviceDrag: DragAndDropService, line: ElementRef, linesvg: ElementRef) {
    this.line = line;
    this.linesvg = linesvg;
  }
  ngOnInit(): void {
    this.serviceDrag.box.subscribe((data: Array<BoxConfigModel>) => {
      for (let index = 0; index < data.length; index++) {
        const firstPoint = data[0].distance;
        const lastPoint = data[1].distance;
        console.log(firstPoint, lastPoint);
        this.drawSvg(firstPoint, lastPoint);
        this.moveAt(data[index].pointCordinate.x, data[index].pointCordinate.y);
      }
    })
  }
  //  center line
  moveAt(pageX: number, pageY: number) {
    // console.log("pageXpageY", pageX, pageY);
    this.linesvg.nativeElement.style.display = "block";
    this.linesvg.nativeElement.style.top = 50 + 'px';
    // this.linesvg.nativeElement.style.left = pageX + 'px';

  }

  // drawing our line
  drawSvg(firstPoint: any, lastPoint: any) {
    // `M${0} ${0} L${this.counter} 0`
    const p1x = firstPoint.x;
    const p1y = firstPoint.y;

    const p2x = lastPoint.x;
    const p2y = lastPoint.y;

    const mpx = (p2x + p1x) * 0.5;
    const mpy = (p2y + p1y) * 0.5;

    const theta = Math.atan2(p2y - p1y, p2x - p1x) - Math.PI / 2;

    const offsetX = window.innerWidth - p1x - p2x;
    const offsetY = window.innerHeight - p1y - p2y;

    const c1x = mpx + offsetX * Math.cos(theta);
    const c1y = mpy + offsetX * Math.sin(theta);

    const c2x = mpx - offsetY * Math.cos(theta);
    const c2y = mpy - offsetY * Math.sin(theta);

    console.log(c2x, c2y)
    const curve = `M ${p1x} ${p1y} C ${c2x} ${c1x} ${c2y} ${c1y} ${p2x} ${p2y} `;

    this.line.nativeElement.setAttribute("d", curve);
    this.line.nativeElement.style.display = "block";
    this.linesvg.nativeElement.style.display = "block";
  }

}
