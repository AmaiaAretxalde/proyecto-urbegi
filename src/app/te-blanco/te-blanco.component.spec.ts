import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeBlancoComponent } from './te-blanco.component';

describe('TeBlancoComponent', () => {
  let component: TeBlancoComponent;
  let fixture: ComponentFixture<TeBlancoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeBlancoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeBlancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
