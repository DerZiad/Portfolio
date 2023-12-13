import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalinformationsComponent } from './personalinformations.component';

describe('PersonalinformationsComponent', () => {
  let component: PersonalinformationsComponent;
  let fixture: ComponentFixture<PersonalinformationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalinformationsComponent]
    });
    fixture = TestBed.createComponent(PersonalinformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
