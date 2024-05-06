import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DontHaveAccessComponent } from './dont-have-access.component';

describe('DontHaveAccessComponent', () => {
  let component: DontHaveAccessComponent;
  let fixture: ComponentFixture<DontHaveAccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DontHaveAccessComponent]
    });
    fixture = TestBed.createComponent(DontHaveAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
