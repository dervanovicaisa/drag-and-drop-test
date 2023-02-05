import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragAndDropCdkAngularComponent } from './drag-and-drop-cdk-angular.component';

describe('DragAndDropCdkAngularComponent', () => {
  let component: DragAndDropCdkAngularComponent;
  let fixture: ComponentFixture<DragAndDropCdkAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragAndDropCdkAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragAndDropCdkAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
