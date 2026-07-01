import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialTransacciones } from './historial-transacciones';

describe('HistorialTransacciones', () => {
  let component: HistorialTransacciones;
  let fixture: ComponentFixture<HistorialTransacciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistorialTransacciones],
    }).compileComponents();

    fixture = TestBed.createComponent(HistorialTransacciones);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
