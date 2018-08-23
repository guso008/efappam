import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { EfappamTableHeroesDataSource } from './efappam-table-heroes-datasource';
import { Hero } from '../hero';


@Component({
  selector: 'app-efappam-table-heroes',
  templateUrl: './efappam-table-heroes.component.html',
  styleUrls: ['./efappam-table-heroes.component.css']
})
export class EfappamTableHeroesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: EfappamTableHeroesDataSource;
  selectedHero: Hero;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor(public snackBar: MatSnackBar) {}

  ngOnInit() {
    this.dataSource = new EfappamTableHeroesDataSource(this.paginator, this.sort);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    let messageDetails = 'Hero detail: Id:' + hero.id + ' Name: ' + hero.name;
    this.snackBar.open(messageDetails, 'Close', {
      duration: 2000,
    });
  }
}
