import { CdkDragMove } from '@angular/cdk/drag-drop';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BoxConfigModel } from './model/box-config.model';
import { DragAndDropService } from './service/drag-and-drop.service';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css'],
})
export class DragAndDropWLinesComponent implements OnInit {
  @ViewChild("box") boxEl: ElementRef;
  node: Array<any> = new Array<any>;
  nodeEvents: Array<BoxConfigModel> = new Array<BoxConfigModel>;
  xCenter: number = 0;
  yCenter: number = 0;
  box: any;
  constructor(private serviceDrop: DragAndDropService, boxEl: ElementRef) {
    this.boxEl = boxEl;
    this.box = this.boxEl.nativeElement.getBoundingClientRect()
  }
  ngOnInit(): void {
    this.serviceDrop.items.subscribe((el) => {
      this.node = el;
    })
  }
  onAddItem() {
    const itemRandom = +(Math.random() * 10).toPrecision(1);
    this.xCenter = (this.box.left + this.box.right) / 2;
    this.yCenter = (this.box.top + this.box.bottom) / 2;
    const boxconfig = new BoxConfigModel({ x: 0, y: 0 }, { x: 0, y: 0 }, { x: this.xCenter, y: this.yCenter }, true, 0);
    this.nodeEvents.push(boxconfig);
    this.node.push(itemRandom);
    this.serviceDrop.onAddItem(this.node);
  }

  dragMoved(event: CdkDragMove, id: number) {
    this.xCenter = (this.box.left + this.box.right) / 2;
    this.yCenter = (this.box.top + this.box.bottom) / 2;
    const boxconfig = new BoxConfigModel(event.distance, event.pointerPosition, { x: this.xCenter, y: this.yCenter }, true, id);
    this.nodeEvents[id] = boxconfig;
    this.serviceDrop.dragMoved(this.nodeEvents);
  }
}
