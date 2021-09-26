import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsmalteComponent2 } from './esmalte.component';

describe('EsmalteComponent2', () => {
  let component: EsmalteComponent2;
  let fixture: ComponentFixture<EsmalteComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsmalteComponent2 ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsmalteComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
