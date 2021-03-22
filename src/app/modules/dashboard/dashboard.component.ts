import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

export interface PeriodicElement {
  cid: string;
  name: string;
  address: string;
  mobile: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {cid: "1", name: 'rakesh', address: "12-a", mobile: '123456'},
  {cid: "1", name: 'rakesh', address: "12-a", mobile: '123456'},
  {cid: "1", name: 'rakesh', address: "12-a", mobile: '123456'},
  {cid: "1", name: 'rakesh', address: "12-a", mobile: '123456'},
  {cid: "1", name: 'rakesh', address: "12-a", mobile: '123456'},
  {cid: "1", name: 'rakesh', address: "12-a", mobile: '123456'},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  cards = [];
  pieChart = [];

  displayedColumns: string[] = ['cid', 'name', 'address', 'mobile'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();

    this.dataSource.paginator = this.paginator;
  }

}
