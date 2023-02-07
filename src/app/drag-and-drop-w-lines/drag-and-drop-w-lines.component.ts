import { CdkDragMove } from '@angular/cdk/drag-drop';
import { Component, OnInit, ElementRef, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-drag-and-drop-w-lines',
  templateUrl: './drag-and-drop-w-lines.component.html',
  styleUrls: ['./drag-and-drop-w-lines.component.css'],
})
export class DragAndDropWLinesComponent implements OnInit {
  @Output("box") box: ElementRef;
  @ViewChild("cdkDragBox") cdkDragBox: ElementRef;
  constructor(private el: ElementRef, box: ElementRef, cdkDragBox: ElementRef) {
    this.box = box;
    this.cdkDragBox = cdkDragBox;
  }
  ngOnInit(): void {
    this.box = this.cdkDragBox;
  }

  dragMoved(event: CdkDragMove) {
    this.box = event.source.element;
  }
}
