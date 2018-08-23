
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { EfappamTableHeroesComponent } from './efappam-table-heroes.component';

describe('EfappamTableHeroesComponent', () => {
  let component: EfappamTableHeroesComponent;
  let fixture: ComponentFixture<EfappamTableHeroesComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EfappamTableHeroesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EfappamTableHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
