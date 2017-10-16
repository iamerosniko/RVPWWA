import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionHeadComponent } from './function-head.component';

describe('FunctionHeadComponent', () => {
  let component: FunctionHeadComponent;
  let fixture: ComponentFixture<FunctionHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
