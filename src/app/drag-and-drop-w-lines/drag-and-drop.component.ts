import { CdkDragMove } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { DragAndDropService } from './service/drag-and-drop.service';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css'],
})
export class DragAndDropWLinesComponent implements OnInit {
  node: Array<number> = new Array<number>;
  dots: Array<number> = [0, 1, 2, 3];
  pointerPosition: { x: number; y: number; } | undefined;
  distance: { x: number; y: number; } | undefined;
  pointCordinate: {} | undefined;
  id: number | undefined;
  dot: any;
  dotIndex: number | undefined;
  constructor(private serviceDrop: DragAndDropService) { }
  ngOnInit(): void {
    this.serviceDrop.items.subscribe((el) => {
      this.node = el;
    })
  }
  onAddItem() {
    const itemRandom = +(Math.random() * 10).toPrecision(1);
    this.node.push(itemRandom);
    this.serviceDrop.onAddItem(this.node);
  }

  dotClicked(dot: HTMLDivElement, id: number) {
    this.dot = dot;
    const xCenter = (dot.getBoundingClientRect().left + dot.getBoundingClientRect().right) / 2;
    const yCenter = (dot.getBoundingClientRect().top + dot.getBoundingClientRect().bottom) / 2;
    this.pointCordinate = { x: xCenter, y: yCenter };
    this.dotIndex = id;
  }
  dragMoved(event: CdkDragMove, id: number, box: HTMLDivElement) {
    if (this.dot !== undefined) {
      const xCenter = (this.dot.getBoundingClientRect().left + this.dot.getBoundingClientRect().right) / 2;
      const yCenter = (this.dot.getBoundingClientRect().top + this.dot.getBoundingClientRect().bottom) / 2;
      this.pointerPosition = event.pointerPosition;
      this.distance = event.distance;
      this.pointCordinate = { x: xCenter, y: yCenter };
      this.id = id;
      if (id == 0) {
        localStorage.setItem("prevPointCordinate", JSON.stringify(this.pointCordinate));
      } else if (id == 1) {
        localStorage.setItem("currPointCordinate", JSON.stringify(this.pointCordinate));
      }else{
        localStorage.removeItem("prevPointCordinate");
        localStorage.removeItem("currPointCordinate");
        localStorage.removeItem("currValue");
        localStorage.removeItem("prevValue");
      }
    }
  }

}
