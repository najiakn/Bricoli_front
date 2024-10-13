import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptePresComponent } from './compte-pres.component';

describe('ComptePresComponent', () => {
  let component: ComptePresComponent;
  let fixture: ComponentFixture<ComptePresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComptePresComponent]
    });
    fixture = TestBed.createComponent(ComptePresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
