import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FhaachenwerkstudentComponent } from './fhaachenwerkstudent.component';

describe('FhaachenwerkstudentComponent', () => {
  let component: FhaachenwerkstudentComponent;
  let fixture: ComponentFixture<FhaachenwerkstudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FhaachenwerkstudentComponent]
    });
    fixture = TestBed.createComponent(FhaachenwerkstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
