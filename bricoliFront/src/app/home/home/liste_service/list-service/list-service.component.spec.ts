import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeServiceComponent } from './list-service.component';


describe('ListServiceComponent', () => {
  let component: ListeServiceComponent;
  let fixture: ComponentFixture<ListeServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeServiceComponent]
    });
    fixture = TestBed.createComponent(ListeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
