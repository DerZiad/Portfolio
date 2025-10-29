import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalexperienceComponent } from './professionalexperience.component';

describe('ProfessionalexperienceComponent', () => {
  let component: ProfessionalexperienceComponent;
  let fixture: ComponentFixture<ProfessionalexperienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfessionalexperienceComponent]
    });
    fixture = TestBed.createComponent(ProfessionalexperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
