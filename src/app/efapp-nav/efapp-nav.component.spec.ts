
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { EfappNavComponent } from './efapp-nav.component';

describe('EfappNavComponent', () => {
  let component: EfappNavComponent;
  let fixture: ComponentFixture<EfappNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [EfappNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EfappNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
