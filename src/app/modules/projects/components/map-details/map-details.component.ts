import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-map-details',
  templateUrl: './map-details.component.html',
  styleUrls: ['./map-details.component.css']
})
export class MapDetailsComponent implements OnInit {

  constructor() { }

  @Input() markerListener: Subject<any>;

  showOverview: boolean = true;
  showDetails: boolean = false;
  showMarkerDetails: boolean = false;

  villagesSurveyed = 6;

  villageDetails = {
    name: 'Muni ki reti Area-Distt-Tehri',
    wasteDischarge: '5800',
    primaryPollution: 'Grey & Black Water',
    tapped: 5,
    partiallyTapped: 3,
    untapped: 4
  }

  markerDetails: any;

  ngOnInit() {
    this.markerListener.subscribe((res) => {
      this.showOverview = false;
      this.showDetails = false;
      this.showMarkerDetails = true;
      this.markerDetails = res;
      this.markerDetails['image'] = this.markerDetails.images[0];
      if(this.markerDetails.status === 'Tapped') {
        this.markerDetails['iconUrl'] = '/assets/icons/tapped.svg';
      } else if (this.markerDetails.status === 'Untapped') {
        this.markerDetails['iconUrl'] = '/assets/icons/untapped.svg';
      } else if (this.markerDetails.status === 'Partially Tapped') {
        this.markerDetails['iconUrl'] = '/assets/icons/partiallyTapped.svg';
      }
    })
  }

  
}
