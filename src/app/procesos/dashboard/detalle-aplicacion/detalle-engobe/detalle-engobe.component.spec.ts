import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEngobeComponent } from './detalle-engobe.component';

describe('DetalleEngobeComponent', () => {
  let component: DetalleEngobeComponent;
  let fixture: ComponentFixture<DetalleEngobeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleEngobeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleEngobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
