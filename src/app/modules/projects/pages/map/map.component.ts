import { Component, OnInit, ViewChild } from '@angular/core';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper, KmlLayerManager } from '@agm/core/services'
import { Router } from '@angular/router';
import { markers } from './markers.js';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: number = 30.171533; 
  lng: number = 78.400059;
  zoomLevel = 14;
  zoomPosition: google.maps.ControlPosition;
  streetViewPosition: google.maps.ControlPosition;
  mapTypeControlPosition: google.maps.ControlPosition;

  markerIcon = '/assets/icons/tapped.svg';
  markers: Array<any>;

  @ViewChild(AgmMap) map: AgmMap;
  public mapStyles = [
    {
    "featureType": "poi",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
      ]
    }
  ];

  polygons: Array<any> = [
    {url: 'https://drive.google.com/uc?authuser=0&id=1vXup6Qo0qXsllO1xdY2BJ9ovpXhhoxnd&export=download'},
    // {url: 'https://drive.google.com/uc?authuser=0&id=18qbgy9OiPlw2VpYLcHsIGDNR9adFVHbe&export=download'},
  ]


  constructor(
    public mapsApiLoader: MapsAPILoader,
    private wrapper: GoogleMapsAPIWrapper,
    public kmlLayerManager: KmlLayerManager,
    private router: Router) {
      this.mapsApiLoader.load().then(() => {
        this.zoomPosition = google.maps.ControlPosition.BOTTOM_LEFT;
        this.streetViewPosition = google.maps.ControlPosition.BOTTOM_LEFT;
        this.mapTypeControlPosition = google.maps.ControlPosition.BOTTOM_LEFT;
      });
    }

  ngOnInit() {
    this.markers = markers;
    console.log(this.markers);
  }

  logout(): void {
    this.router.navigate(['login']);
  }

  handleKmlClick(): void {
    console.log('KML clicked');
  }

  markerClicked(marker) {
    console.log(marker);
  }
}
