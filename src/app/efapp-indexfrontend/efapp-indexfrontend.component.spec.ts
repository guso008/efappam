
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { EfappIndexfrontendComponent } from './efapp-indexfrontend.component';

describe('EfappIndexfrontendComponent', () => {
  let component: EfappIndexfrontendComponent;
  let fixture: ComponentFixture<EfappIndexfrontendComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [EfappIndexfrontendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EfappIndexfrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
