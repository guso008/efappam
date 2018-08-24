import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EfappamHeroSearchComponent } from './efappam-hero-search.component';

describe('EfappamHeroSearchComponent', () => {
  let component: EfappamHeroSearchComponent;
  let fixture: ComponentFixture<EfappamHeroSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EfappamHeroSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EfappamHeroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
