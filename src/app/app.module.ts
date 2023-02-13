import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragAndDropWLinesComponent } from './drag-and-drop-w-lines/drag-and-drop.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LinerModule } from 'projects/liner/src/public-api';
@NgModule({
  declarations: [
    AppComponent,
    DragAndDropWLinesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    FormsModule,
    LinerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
