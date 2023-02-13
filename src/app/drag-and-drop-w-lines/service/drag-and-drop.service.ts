import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
@Injectable({ providedIn: "root" })
export class DragAndDropService {
  items: Subject<Array<number>> = new Subject<Array<number>>;
  constructor() { }

  onAddItem(item: Array<number>) {
    this.items.next(item);
  }
}
