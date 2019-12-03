import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeOolongComponent } from './te-oolong.component';

describe('TeOolongComponent', () => {
  let component: TeOolongComponent;
  let fixture: ComponentFixture<TeOolongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeOolongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeOolongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
