import { Injectable } from "@angular/core";
import { BoxConfigModel } from "../model/box-config.model";
import { Subject } from "rxjs";
import { CdkDragMove } from "@angular/cdk/drag-drop";

@Injectable({ providedIn: "root" })
export class DragAndDropService {
  box: Subject<BoxConfigModel> = new Subject<BoxConfigModel>;
  pageX: number = 0;
  pageY: number = 0;
  distance: any;
  pointerPosition: any;
  constructor() { }

  getPosition(event: any) {
    this.pageX = event.pageX;
    this.pageY = event.pageY;
    const boxconfig = new BoxConfigModel(this.distance, { x: this.pageX, y: this.pageY }, { x: this.pageX, y: this.pageY }, true);
    this.box.next(boxconfig);
  }
  dragMoved(event: CdkDragMove) {
    this.distance = event.distance;
    this.pointerPosition = event.pointerPosition;
    const boxconfig = new BoxConfigModel(this.distance, this.pointerPosition, { x: this.pointerPosition.x, y: this.pointerPosition.y }, true);
    this.box.next(boxconfig);
  }
}
