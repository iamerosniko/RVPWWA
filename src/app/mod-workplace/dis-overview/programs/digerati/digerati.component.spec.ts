import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigeratiComponent } from './digerati.component';

describe('DigeratiComponent', () => {
  let component: DigeratiComponent;
  let fixture: ComponentFixture<DigeratiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigeratiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigeratiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
