import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-efapp-list-heroes',
  templateUrl: './efapp-list-heroes.component.html',
  styleUrls: ['./efapp-list-heroes.component.css']
})
export class EfappListHeroesComponent implements OnInit {
  heroes: Hero[];
  constructor(private heroService: HeroService, private router: Router, private location: Location) { }

  ngOnInit() {
    this.getHeroes();
  }

  showInfo(hero: Hero): void {
    let path = "detail/" + hero.id;
    this.router.navigate([path]);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
        .subscribe(hero => {
          this.heroes.push(hero);
        });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
