import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';

import {MatTableDataSource,MatSort} from '@angular/material';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  displayedColumns: string[] = ['cid', 'name', 'address', 'mobile','designation'];
 //displayedColumns: string[] = ['cid','name','address','mobile'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor() { }

  ngOnInit() {
     this.dataSource.sort = this.sort;
    console.log(this.dataSource.sort);
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}








export interface Element {
  cid: string;
  name: string;
  address: string;
  mobile: string;
  designation:string;
}

const ELEMENT_DATA: Element[] = [
  {cid: "1", name: 'rakesh', address: "12-a", mobile: '123456',designation:'asvv'},
  {cid: "2", name: 'suresh', address: "12-a", mobile: '123456',designation:'asvv'},
  {cid: "3", name: 'gite', address: "12-a", mobile: '123456',designation:'asvv'},
  {cid: "4", name: 'dnsdn', address: "12-a", mobile: '123456',designation:'asvv'},
  {cid: "5", name: 'djakdbd', address: "12-a", mobile: '123456',designation:'asvv'},
  {cid: "6", name: 'dsnsjd', address: "12-a", mobile: '123456',designation:'asvv'},
  {cid: "7", name: 'djsdj', address: "12-a", mobile: '123456',designation:'asvv'},
  {cid: "8", name: 'dsdj', address: "12-a", mobile: '123456',designation:'asvv'},
  {cid: "9", name: 'djsjd', address: "12-a", mobile: '123456',designation:'asvv'},
  {cid: "10", name: 'dsd', address: "12-a", mobile: '123456',designation:'asvv'},
  {cid: "11", name: 'ragfgg', address: "12-a", mobile: '123456',designation:'asvv'},
  {cid: "12", name: 'rakesh', address: "12-a", mobile: '123456',designation:'asvv'},
];
