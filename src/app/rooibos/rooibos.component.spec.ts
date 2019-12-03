import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RooibosComponent } from './rooibos.component';

describe('RooibosComponent', () => {
  let component: RooibosComponent;
  let fixture: ComponentFixture<RooibosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RooibosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RooibosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
