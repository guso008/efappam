import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';


@Component({
  selector: 'app-efapp-list-heroes',
  templateUrl: './efapp-list-heroes.component.html',
  styleUrls: ['./efapp-list-heroes.component.css']
})
export class EfappListHeroesComponent implements OnInit {
  heroes = HEROES;
  constructor(private location: Location) { }

  ngOnInit() {
  }

  showInfo(hero: Hero): void {
    let path = "detail/" + hero.id;
    this.location.go(path, '', null);
  }
}
