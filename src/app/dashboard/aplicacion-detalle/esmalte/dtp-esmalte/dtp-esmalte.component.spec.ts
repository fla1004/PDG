import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtpEsmalteComponent } from './dtp-esmalte.component';

describe('DtpEsmalteComponent', () => {
  let component: DtpEsmalteComponent;
  let fixture: ComponentFixture<DtpEsmalteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DtpEsmalteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DtpEsmalteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
