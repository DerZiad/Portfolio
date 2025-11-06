import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FhaacheninformationsComponent } from './fhaacheninformations.component';

describe('UniversitiesinfoComponent', () => {
  let component: FhaacheninformationsComponent;
  let fixture: ComponentFixture<FhaacheninformationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FhaacheninformationsComponent]
    });
    fixture = TestBed.createComponent(FhaacheninformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
