import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfusionesComponent } from './infusiones.component';

describe('InfusionesComponent', () => {
  let component: InfusionesComponent;
  let fixture: ComponentFixture<InfusionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfusionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfusionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
