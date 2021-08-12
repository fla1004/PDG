import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAplicacionComponent } from './detalle-aplicacion.component';

describe('DetalleAplicacionComponent', () => {
  let component: DetalleAplicacionComponent;
  let fixture: ComponentFixture<DetalleAplicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleAplicacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAplicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
