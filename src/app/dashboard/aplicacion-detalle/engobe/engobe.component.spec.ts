import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngobeComponent } from './engobe.component';

describe('EngobeComponent', () => {
  let component: EngobeComponent;
  let fixture: ComponentFixture<EngobeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngobeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
