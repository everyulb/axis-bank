import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-details',
  templateUrl: './map-details.component.html',
  styleUrls: ['./map-details.component.css']
})
export class MapDetailsComponent implements OnInit {

  constructor() { }

  showOverview: boolean = false;
  showDetails: boolean = true;

  villagesSurveyed = 6;

  villageDetails = {
    name: 'Muni ki reti Area-Distt-Tehri',
    wasteDischarge: '5800',
    primaryPollution: 'Grey & Black Water',
    tapped: 5,
    partiallyTapped: 3,
    untapped: 4
  }

  ngOnInit() {
  }

  
}
