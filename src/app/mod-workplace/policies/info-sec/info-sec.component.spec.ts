import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSecComponent } from './info-sec.component';

describe('InfoSecComponent', () => {
  let component: InfoSecComponent;
  let fixture: ComponentFixture<InfoSecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoSecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
