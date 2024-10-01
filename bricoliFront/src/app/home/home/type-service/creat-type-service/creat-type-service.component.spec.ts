import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatTypeServiceComponent } from './creat-type-service.component';

describe('CreatTypeServiceComponent', () => {
  let component: CreatTypeServiceComponent;
  let fixture: ComponentFixture<CreatTypeServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatTypeServiceComponent]
    });
    fixture = TestBed.createComponent(CreatTypeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
