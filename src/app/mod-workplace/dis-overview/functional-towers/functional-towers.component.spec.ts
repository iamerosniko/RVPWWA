import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalTowersComponent } from './functional-towers.component';

describe('FunctionalTowersComponent', () => {
  let component: FunctionalTowersComponent;
  let fixture: ComponentFixture<FunctionalTowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionalTowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionalTowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
