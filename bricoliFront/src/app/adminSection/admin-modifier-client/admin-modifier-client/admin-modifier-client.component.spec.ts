import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModifierClientComponent } from './admin-modifier-client.component';

describe('AdminModifierClientComponent', () => {
  let component: AdminModifierClientComponent;
  let fixture: ComponentFixture<AdminModifierClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminModifierClientComponent]
    });
    fixture = TestBed.createComponent(AdminModifierClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
