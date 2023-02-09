import { Injectable } from "@angular/core";
import { BoxConfigModel } from "../model/box-config.model";
import { Subject } from "rxjs";
@Injectable({ providedIn: "root" })
export class DragAndDropService {
  box: Subject<Array<BoxConfigModel>> = new Subject<Array<BoxConfigModel>>;
  items: Subject<Array<number>> = new Subject<Array<number>>;
  distance: any;
  pointerPosition: any;
  constructor() { }

  onAddItem(item: Array<number>) {
    this.items.next(item);
  }
  dragMoved(boxconfig: Array<BoxConfigModel>) {
    this.box.next(boxconfig);
  }
}
