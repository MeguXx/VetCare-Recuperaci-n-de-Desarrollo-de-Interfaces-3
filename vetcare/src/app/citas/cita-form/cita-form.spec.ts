import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaForm } from './cita-form';

describe('CitaForm', () => {
  let component: CitaForm;
  let fixture: ComponentFixture<CitaForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CitaForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitaForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
