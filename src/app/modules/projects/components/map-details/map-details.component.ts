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
    name: 'Muni ki reti, Dist:Tehri',
    wasteDischarge: '5800',
    primaryPollution: 'Grey & Black Water',
    totalPlants: 2,
    totalPlantsCap: 13.5,
    operationalPlants: 1,
    operationalPlantsCap: 6.0,
    proposedPlants: 1,
    proposedPlantsCap: 7.5,
    population: 28636,
    households: 6667,
    tapped: 8,
    partiallyTapped: 2,
    untapped: 3
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

  toggleFullScreenImage(): void {
    console.log('Full screen image view');
  }

  
}
