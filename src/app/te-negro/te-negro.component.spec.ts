import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeNegroComponent } from './te-negro.component';

describe('TeNegroComponent', () => {
  let component: TeNegroComponent;
  let fixture: ComponentFixture<TeNegroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeNegroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeNegroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
