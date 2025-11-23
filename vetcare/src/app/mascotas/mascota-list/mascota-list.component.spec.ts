import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaList } from './mascota-list.component';

describe('MascotaList', () => {
  let component: MascotaList;
  let fixture: ComponentFixture<MascotaList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MascotaList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MascotaList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
