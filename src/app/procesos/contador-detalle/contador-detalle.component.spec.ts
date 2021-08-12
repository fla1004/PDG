import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorDetalleComponent } from './contador-detalle.component';

describe('ContadorDetalleComponent', () => {
  let component: ContadorDetalleComponent;
  let fixture: ComponentFixture<ContadorDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContadorDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContadorDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
