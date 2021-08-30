import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStudentPaymentsComponent } from './list-student-payments.component';

describe('ListStudentPaymentsComponent', () => {
  let component: ListStudentPaymentsComponent;
  let fixture: ComponentFixture<ListStudentPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListStudentPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStudentPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
