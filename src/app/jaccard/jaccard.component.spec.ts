import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JaccardComponent } from './jaccard.component';

describe('JaccardComponent', () => {
  let component: JaccardComponent;
  let fixture: ComponentFixture<JaccardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JaccardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JaccardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
