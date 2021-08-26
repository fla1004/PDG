import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaEsmalteComponent } from './grafica-esmalte.component';

describe('GraficaEsmalteComponent', () => {
  let component: GraficaEsmalteComponent;
  let fixture: ComponentFixture<GraficaEsmalteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaEsmalteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaEsmalteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
