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
  pointerPosition: { x: number; y: number; } | undefined;
  distance: { x: number; y: number; } | undefined;
  pointCordinate: { x: number; y: number; } | undefined;
  id: number | undefined;
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

  dragMoved(event: CdkDragMove, id: number, box: HTMLDivElement) {
    const xCenter = (box.getBoundingClientRect().left + box.getBoundingClientRect().right) / 2;
    const yCenter = (box.getBoundingClientRect().top + box.getBoundingClientRect().bottom) / 2;
    this.pointerPosition = event.pointerPosition;
    this.distance = event.distance;
    this.pointCordinate = { x: xCenter, y: yCenter };
    this.id = id;
  }

}
