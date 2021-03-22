import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart() {
    return [{
      name: 'Indore',
      data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
      name: 'Bhopal',
      data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
      name: 'Nagpur',
      data: [163, 203, 276, 408, 547, 729, 628]
    }, {
      name: 'Mumbai',
      data: [18, 31, 54, 156, 339, 818, 1201]
    }, {
      name: 'Delhi',
      data: [2, 2, 2, 6, 13, 30, 46]
    }];
  }

  cards() {
    return [71, 78, 39, 66];
  }

  pieChart() {
    return [{
      name: 'device trafic',
      y: 61.41,
      sliced: true,
      selected: true
    }, {
      name: 'devices online',
      y: 11.84
    }, {
      name: 'device offline',
      y: 10.85
    }, {
      name: 'device battery',
      y: 4.67
    }, {
      name: 'device server',
      y: 4.18
    }, {
      name: 'device issue',
      y: 1.64
    }, {
      name: 'Opera',
      y: 1.6
    }, {
      name: 'QQ',
      y: 1.2
    }, {
      name: 'Other',
      y: 2.61
    }];
  }
}
