import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BorrowerComponent } from 'src/app/borrower/add-borrower/add-borrower.component';


describe('BorrowerComponent', () => {
  let component: BorrowerComponent;
  let fixture: ComponentFixture<BorrowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
