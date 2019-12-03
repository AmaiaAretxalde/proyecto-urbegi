import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeDecafComponent } from './te-decaf.component';

describe('TeDecafComponent', () => {
  let component: TeDecafComponent;
  let fixture: ComponentFixture<TeDecafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeDecafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeDecafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
