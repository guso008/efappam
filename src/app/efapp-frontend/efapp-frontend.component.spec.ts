
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { EfappFrontendComponent } from './efapp-frontend.component';

describe('EfappFrontendComponent', () => {
  let component: EfappFrontendComponent;
  let fixture: ComponentFixture<EfappFrontendComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [EfappFrontendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EfappFrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
