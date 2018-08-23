
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { EfappDashboardComponent } from './efapp-dashboard.component';

describe('EfappDashboardComponent', () => {
  let component: EfappDashboardComponent;
  let fixture: ComponentFixture<EfappDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EfappDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EfappDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
