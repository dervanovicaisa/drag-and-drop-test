import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragAndDropHtmlComponent } from './drag-and-drop-html.component';

describe('DragAndDropHtmlComponent', () => {
  let component: DragAndDropHtmlComponent;
  let fixture: ComponentFixture<DragAndDropHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragAndDropHtmlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragAndDropHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
