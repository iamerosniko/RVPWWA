import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationLeaveComponent } from './vacation-leave.component';

describe('VacationLeaveComponent', () => {
  let component: VacationLeaveComponent;
  let fixture: ComponentFixture<VacationLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacationLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
