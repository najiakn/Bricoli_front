import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModifierServiceComponent } from './admin-modifier-service.component';

describe('AdminModifierServiceComponent', () => {
  let component: AdminModifierServiceComponent;
  let fixture: ComponentFixture<AdminModifierServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminModifierServiceComponent]
    });
    fixture = TestBed.createComponent(AdminModifierServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
