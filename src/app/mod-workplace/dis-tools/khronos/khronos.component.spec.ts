import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhronosComponent } from './khronos.component';

describe('KhronosComponent', () => {
  let component: KhronosComponent;
  let fixture: ComponentFixture<KhronosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhronosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhronosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
