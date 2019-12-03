import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeRojoComponent } from './te-rojo.component';

describe('TeRojoComponent', () => {
  let component: TeRojoComponent;
  let fixture: ComponentFixture<TeRojoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeRojoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeRojoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
