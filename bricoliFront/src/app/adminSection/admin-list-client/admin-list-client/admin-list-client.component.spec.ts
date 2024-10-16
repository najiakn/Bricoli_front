import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListClientComponent } from './admin-list-client.component';

describe('AdminListClientComponent', () => {
  let component: AdminListClientComponent;
  let fixture: ComponentFixture<AdminListClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminListClientComponent]
    });
    fixture = TestBed.createComponent(AdminListClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
