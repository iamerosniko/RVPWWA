import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseRulesComponent } from './house-rules.component';

describe('HouseRulesComponent', () => {
  let component: HouseRulesComponent;
  let fixture: ComponentFixture<HouseRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
