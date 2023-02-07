import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgLineComponent } from './ng-line.component';

describe('NgLineComponent', () => {
  let component: NgLineComponent;
  let fixture: ComponentFixture<NgLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
