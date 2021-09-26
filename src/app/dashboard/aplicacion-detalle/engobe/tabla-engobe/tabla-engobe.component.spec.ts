import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEngobeComponent } from './tabla-engobe.component';

describe('TablaEngobeComponent', () => {
  let component: TablaEngobeComponent;
  let fixture: ComponentFixture<TablaEngobeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaEngobeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaEngobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
