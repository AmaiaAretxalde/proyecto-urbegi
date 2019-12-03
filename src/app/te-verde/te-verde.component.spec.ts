import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeVerdeComponent } from './te-verde.component';

describe('TeVerdeComponent', () => {
  let component: TeVerdeComponent;
  let fixture: ComponentFixture<TeVerdeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeVerdeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeVerdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
