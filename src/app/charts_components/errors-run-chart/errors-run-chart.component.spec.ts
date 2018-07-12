import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsRunChartComponent } from './errors-run-chart.component';

describe('ErrorsRunChartComponent', () => {
  let component: ErrorsRunChartComponent;
  let fixture: ComponentFixture<ErrorsRunChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorsRunChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorsRunChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
