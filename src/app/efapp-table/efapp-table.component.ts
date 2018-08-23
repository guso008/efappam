import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { EfappTableDataSource } from './efapp-table-datasource';

@Component({
  selector: 'app-efapp-table',
  templateUrl: './efapp-table.component.html',
  styleUrls: ['./efapp-table.component.css']
})
export class EfappTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: EfappTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new EfappTableDataSource(this.paginator, this.sort);
  }
}
