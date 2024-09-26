import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanceSvComponent } from './lance-sv.component';

describe('LanceSvComponent', () => {
  let component: LanceSvComponent;
  let fixture: ComponentFixture<LanceSvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanceSvComponent]
    });
    fixture = TestBed.createComponent(LanceSvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
