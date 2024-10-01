import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTypeServiceComponent } from './liste-type-service.component';

describe('ListeTypeServiceComponent', () => {
  let component: ListeTypeServiceComponent;
  let fixture: ComponentFixture<ListeTypeServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeTypeServiceComponent]
    });
    fixture = TestBed.createComponent(ListeTypeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
