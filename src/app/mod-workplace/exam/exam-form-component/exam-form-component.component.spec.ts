import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamFormComponentComponent } from './exam-form-component.component';

describe('ExamFormComponentComponent', () => {
  let component: ExamFormComponentComponent;
  let fixture: ComponentFixture<ExamFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamFormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
