import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { markers } from '../../markers.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map-details',
  templateUrl: './map-details.component.html',
  styleUrls: ['./map-details.component.css']
})
export class MapDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() markerListener: Subject<any>;
  @Input() traverseMarkers: Subject<any>;

  showOverview: boolean = false;
  showDetails: boolean = true;
  showMarkerDetails: boolean = false;
  currentMarkerIndex: number;

  villagesSurveyed = 6;
  markers: Array<any>;

  villageDetails = {
    name: 'Muni ki reti Area-Distt-Tehri',
    wasteDischarge: '5800',
    primaryPollution: 'Grey & Black Water',
    tapped: 5,
    partiallyTapped: 3,
    untapped: 4
  }

  currentMarker: any;

  ngOnInit() {
    this.markers = markers;

    this.markerListener.subscribe((index) => {
      this.showMarkerDetails = false;

      this.setCurrentMarker(index);
      
      this.showMarkerDetails = true;
    })
  }

  hideMarkerDetails(): void {
    if(this.showMarkerDetails === true) {
      this.traverseMarkers.next(-1);
    } else {
      this.router.navigate(['projects']);
    }
    this.showMarkerDetails = false;
    this.showDetails = true;
  }

  goToPrevMarker(): void {
    console.log('prev');
    if (this.currentMarkerIndex !== 0) {
      this.currentMarkerIndex--;
      this.traverseMarkers.next(this.currentMarkerIndex);
      this.setCurrentMarker(this.currentMarkerIndex);
    }
  }

  goToNextMarker(): void {
    console.log('next');
    if (this.currentMarkerIndex < (this.markers.length - 1) ) {
      this.currentMarkerIndex++;
      this.traverseMarkers.next(this.currentMarkerIndex);
      this.setCurrentMarker(this.currentMarkerIndex);
    }
  }

  setCurrentMarker(index: number): void {
      this.currentMarkerIndex = index;
      this.showOverview = false;
      this.showDetails = false;
      this.showMarkerDetails = true;
      this.currentMarker = this.markers[index];
      console.log('Current Marker: ', this.currentMarker);
      this.currentMarker['image'] = this.currentMarker.images[0];
      if(this.currentMarker.status === 'Tapped') {
        this.currentMarker['iconUrl'] = '/assets/icons/tapped.svg';
      } else if (this.currentMarker.status === 'Untapped') {
        this.currentMarker['iconUrl'] = '/assets/icons/untapped.svg';
      } else if (this.currentMarker.status === 'Partially Tapped') {
        this.currentMarker['iconUrl'] = '/assets/icons/partiallyTapped.svg';
      }
  }

  
}
