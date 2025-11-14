import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaForm } from './mascota-form';

describe('MascotaForm', () => {
  let component: MascotaForm;
  let fixture: ComponentFixture<MascotaForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MascotaForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MascotaForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
