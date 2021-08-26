import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsmalteComponent } from './esmalte.component';

describe('EsmalteComponent', () => {
  let component: EsmalteComponent;
  let fixture: ComponentFixture<EsmalteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsmalteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsmalteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
