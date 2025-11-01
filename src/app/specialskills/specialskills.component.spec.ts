import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialskillsComponent } from './specialskills.component';

describe('SpecialskillsComponent', () => {
  let component: SpecialskillsComponent;
  let fixture: ComponentFixture<SpecialskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialskillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
