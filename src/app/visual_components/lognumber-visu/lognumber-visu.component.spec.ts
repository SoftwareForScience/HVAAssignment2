import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LognumberVisuComponent } from './lognumber-visu.component';

describe('LognumberVisuComponent', () => {
  let component: LognumberVisuComponent;
  let fixture: ComponentFixture<LognumberVisuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LognumberVisuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LognumberVisuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
