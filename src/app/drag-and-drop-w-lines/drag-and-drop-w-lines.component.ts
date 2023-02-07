import { CdkDragMove } from '@angular/cdk/drag-drop';
import { Component, OnInit} from '@angular/core';
import { DragAndDropService } from './service/drag-and-drop.service';

@Component({
  selector: 'app-drag-and-drop-w-lines',
  templateUrl: './drag-and-drop-w-lines.component.html',
  styleUrls: ['./drag-and-drop-w-lines.component.css'],
})
export class DragAndDropWLinesComponent implements OnInit {
  constructor(private serviceDrop: DragAndDropService) { }
  ngOnInit(): void {
  }

  getPosition(event: any) {
    this.serviceDrop.getPosition(event);

  }
  dragMoved(event: CdkDragMove) {
    this.serviceDrop.dragMoved(event);
  }
}
