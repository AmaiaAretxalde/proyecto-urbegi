import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CestaComponent } from './cesta.component';

<<<<<<< HEAD:src/app/cesta/cesta.component.spec.ts
=======
import { CestaComponent } from './cesta.component';

>>>>>>> 9e964558b277df57a3d2f49a72408e8e37d950d5:src/app/te-decaf/te-decaf.component.spec.ts
describe('CestaComponent', () => {
  let component: CestaComponent;
  let fixture: ComponentFixture<CestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CestaComponent ]
<<<<<<< HEAD:src/app/cesta/cesta.component.spec.ts

=======
>>>>>>> 9e964558b277df57a3d2f49a72408e8e37d950d5:src/app/te-decaf/te-decaf.component.spec.ts
    })
    .compileComponents();
  }));

  beforeEach(() => {
<<<<<<< HEAD:src/app/cesta/cesta.component.spec.ts

    fixture = TestBed.createComponent(CestaComponent);

=======
    fixture = TestBed.createComponent(CestaComponent);
>>>>>>> 9e964558b277df57a3d2f49a72408e8e37d950d5:src/app/te-decaf/te-decaf.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
