import { Component, ViewChild, ElementRef } from '@angular/core';
import { Rect } from './rect.model';

@Component({
    selector: 'app-drag-and-drop-canvas',
    templateUrl: './drag-and-drop-canvas.component.html',
    styleUrls: ['./drag-and-drop-canvas.component.css'],
})
export class DragAndDropCanvasComponent {
    @ViewChild("canvas") canvasEl?: ElementRef;
    rects: Array<Rect> = [];
    colors: Array<string> = ['green', 'blue', 'yellow', 'orange', 'navy', 'black', 'red', 'navyblue'];
    currentRecIndex: number = 0;
    isDragging: boolean = false;
    startX: number = 0;
    startY: number = 0;
    context: any;
    defaultRec: any;
    randomColor: number = 0;
    constructor() { }

    randomNumber(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }
    drawShape() {
        this.context.clearRect(0, 0, this.context.canvas.clientWidth, this.context.canvas.clientHeight);
        this.rects.map((el) => {
            this.context.fillStyle = el.color;
            this.context.fillRect(el.x, el.y, el.wiidth, el.height);
        })
    }
    ranColor() {
        this.randomColor = +(Math.random() * 8).toPrecision(1);
        if (this.randomColor > 0) {
            return this.colors[this.randomColor];
        } else {
            return this.colors[0];
        }
    }
    addNewRecentagle() {
        this.startX = +(this.randomNumber(0, 300)).toPrecision(1);
        this.startY = +(this.randomNumber(0, 150)).toPrecision(1);
        this.defaultRec = new Rect(this.startX, this.startY, 50, 50, this.ranColor())
        this.rects.push(this.defaultRec);
    }
    onAddRecentagle() {
        this.context = this.canvasEl?.nativeElement.getContext("2d");
        this.addNewRecentagle();
        this.drawShape();
    }
    hasShape(x: number, y: number, shape: Rect): boolean {
        let shapeLeft = shape.x;
        let shapeRight = shape.x + shape.wiidth;
        let shapeTop = shape.y;
        let shapeBottom = shape.y + shape.height;
        console.log("x", x);
        console.log("y", y);
        console.log("shapeLeft", shapeLeft, "shapeRight", shapeRight, "shapeTop", shapeTop, "shapeBottom", shapeBottom);
        console.log("x > shapeLeft", x > shapeLeft);
        console.log("x < shapeRight", x < shapeRight);
        console.log("y > shapeTop", y > shapeTop);
        console.log("y < shapeBottom", y < shapeBottom);
        if (x > shapeLeft && y > shapeTop) {
            console.log("heree");
            return true;
        } else {
            return false;
        }
    }

    onMouseDown(event: MouseEvent) {
        event.preventDefault();
        // console.log(event);
        this.startX = event.clientX;
        this.startY = event.clientY;
        let index = 0;
        for (const rect of this.rects) {
            if (this.hasShape(this.startX, this.startY, rect)) {
                this.currentRecIndex = index;
                this.isDragging = true;
                return;
            }
            index++;
        }
    }
    onMouseUp(event: MouseEvent) {
        if (!this.isDragging) {
            return;
        }
        event.preventDefault();
        this.isDragging = false;
    }
    onMouseOut(event: MouseEvent) {
        if (!this.isDragging) {
            return;
        }
        event.preventDefault();
        this.isDragging = false;
    }
    onMouseMove(event: MouseEvent) {
        if (!this.isDragging) {
            return;
        } else {
            event.preventDefault();
            let x = event.clientX;
            let y = event.clientY;
            let dx = x - this.startX;
            let dy = y - this.startY;
            let current = this.rects[this.currentRecIndex];
            current.x += dx;
            current.y += dy;
            this.drawShape();
            this.startX = x;
            this.startY = y;
        }
    }

}