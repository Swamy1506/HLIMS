import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBorrowersComponent } from './list-loans.component';

describe('ListBorrowersComponent', () => {
  let component: ListBorrowersComponent;
  let fixture: ComponentFixture<ListBorrowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBorrowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBorrowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
