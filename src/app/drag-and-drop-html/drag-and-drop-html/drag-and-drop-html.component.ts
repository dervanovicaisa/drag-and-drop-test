import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-drag-and-drop-html',
  templateUrl: './drag-and-drop-html.component.html',
  styleUrls: ['./drag-and-drop-html.component.css']
})
export class DragAndDropHtmlComponent {
  @ViewChild("box")
  box!: ElementRef;
  items: Array<number> = [1, 2, 3, 4];
  innerText?: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  handleDragStart(e: DragEvent) {
    e!.dataTransfer!.effectAllowed = 'move';
    e!.dataTransfer!.setData('text/html', "3");
  }
  handleDragOver(e: DragEvent) {
    if (e.preventDefault) {
      e.preventDefault();
    }

    e!.dataTransfer!.dropEffect = 'move';

    return false;
  }

  handleDragEnter(e: DragEvent) {
    this.box.nativeElement.classList.add("over");
  }
  handleDragLeave(e: DragEvent) {
    this.box.nativeElement.classList.remove("over");
  }


  handleDragEnd(e: DragEvent) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    this.box.nativeElement.innerText = e.dataTransfer?.getData('text/html');
    return false;
  }
}
