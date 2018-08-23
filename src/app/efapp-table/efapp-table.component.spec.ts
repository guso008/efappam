
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { EfappTableComponent } from './efapp-table.component';

describe('EfappTableComponent', () => {
  let component: EfappTableComponent;
  let fixture: ComponentFixture<EfappTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EfappTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EfappTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
