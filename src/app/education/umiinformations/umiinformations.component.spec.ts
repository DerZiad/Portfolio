import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmiinformationsComponent } from './umiinformations.component';

describe('UmiinformationsComponent', () => {
  let component: UmiinformationsComponent;
  let fixture: ComponentFixture<UmiinformationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UmiinformationsComponent]
    });
    fixture = TestBed.createComponent(UmiinformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
