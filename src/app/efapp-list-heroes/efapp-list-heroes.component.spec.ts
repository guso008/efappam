import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EfappListHeroesComponent } from './efapp-list-heroes.component';

describe('EfappListHeroesComponent', () => {
  let component: EfappListHeroesComponent;
  let fixture: ComponentFixture<EfappListHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EfappListHeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EfappListHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
