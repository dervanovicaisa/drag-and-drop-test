import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragAndDropCanvasComponent } from './drag-and-drop-canvas/drag-and-drop-canvas.component';
import { DragAndDropCdkAngularComponent } from './drag-and-drop-cdk-angular/drag-and-drop-cdk-angular.component';
import { DragAndDropHtmlComponent } from './drag-and-drop-html/drag-and-drop-html.component';
import { DragAndDropWLinesComponent } from './drag-and-drop-w-lines/drag-and-drop-w-lines.component';
import { NgLineComponent, NgLineModule } from 'projects/ng-line/src/public-api';
@NgModule({
  declarations: [
    AppComponent,
    DragAndDropCanvasComponent,
    DragAndDropCdkAngularComponent,
    DragAndDropHtmlComponent,
    DragAndDropWLinesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    NgLineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
