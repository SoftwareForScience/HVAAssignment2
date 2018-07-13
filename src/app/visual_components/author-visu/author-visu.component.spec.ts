import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorVisuComponent } from './author-visu.component';

describe('AuthorVisuComponent', () => {
  let component: AuthorVisuComponent;
  let fixture: ComponentFixture<AuthorVisuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorVisuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorVisuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
