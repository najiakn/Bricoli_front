import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOffreComponent } from './admin-offre.component';

describe('AdminOffreComponent', () => {
  let component: AdminOffreComponent;
  let fixture: ComponentFixture<AdminOffreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminOffreComponent]
    });
    fixture = TestBed.createComponent(AdminOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
