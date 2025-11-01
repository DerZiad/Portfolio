import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MgmwerkstudentComponent } from './mgmwerkstudent.component';

describe('MgmwerkstudentComponent', () => {
  let component: MgmwerkstudentComponent;
  let fixture: ComponentFixture<MgmwerkstudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MgmwerkstudentComponent]
    });
    fixture = TestBed.createComponent(MgmwerkstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
