import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsDetectorsChartComponent } from './errors-detectors-chart.component';

describe('ErrorsDetectorsChartComponent', () => {
  let component: ErrorsDetectorsChartComponent;
  let fixture: ComponentFixture<ErrorsDetectorsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorsDetectorsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorsDetectorsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
