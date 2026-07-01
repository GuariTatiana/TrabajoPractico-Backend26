import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesForm } from './publicaciones-form';

describe('PublicacionesForm', () => {
  let component: PublicacionesForm;
  let fixture: ComponentFixture<PublicacionesForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicacionesForm],
    }).compileComponents();

    fixture = TestBed.createComponent(PublicacionesForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
