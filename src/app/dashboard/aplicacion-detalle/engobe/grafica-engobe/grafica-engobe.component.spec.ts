import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaEngobeComponent } from './grafica-engobe.component';

describe('GraficaEngobeComponent', () => {
  let component: GraficaEngobeComponent;
  let fixture: ComponentFixture<GraficaEngobeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaEngobeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaEngobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
