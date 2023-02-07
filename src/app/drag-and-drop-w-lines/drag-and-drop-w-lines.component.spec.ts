import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragAndDropWLinesComponent } from './drag-and-drop-w-lines.component';

describe('DragAndDropWLinesComponent', () => {
  let component: DragAndDropWLinesComponent;
  let fixture: ComponentFixture<DragAndDropWLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragAndDropWLinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragAndDropWLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
