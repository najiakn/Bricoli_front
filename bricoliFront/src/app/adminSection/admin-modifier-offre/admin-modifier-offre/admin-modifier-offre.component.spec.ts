import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModifierOffreComponent } from './admin-modifier-offre.component';

describe('AdminModifierOffreComponent', () => {
  let component: AdminModifierOffreComponent;
  let fixture: ComponentFixture<AdminModifierOffreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminModifierOffreComponent]
    });
    fixture = TestBed.createComponent(AdminModifierOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
