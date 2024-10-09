import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancerOffreComponent } from './lancer-offre.component';

describe('LancerOffreComponent', () => {
  let component: LancerOffreComponent;
  let fixture: ComponentFixture<LancerOffreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LancerOffreComponent]
    });
    fixture = TestBed.createComponent(LancerOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
