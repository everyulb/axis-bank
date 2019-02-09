import { Component, OnInit, ViewChild } from '@angular/core';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper, KmlLayerManager } from '@agm/core/services'
import { Router } from '@angular/router';
import { markers } from '../../markers.js';
import { Subject } from 'rxjs';

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
  emitMarkerClickEvent: Subject<any> = new Subject();
  onMarkerTraversal: Subject<any> = new Subject();

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
    this.markers.forEach(m => {
      if(m.status === 'Tapped') {
        m['iconUrl'] = '/assets/icons/tapped.svg';
      } else if (m.status === 'Untapped') {
        m['iconUrl'] = '/assets/icons/untapped.svg';
      } else if (m.status === 'Partially Tapped') {
        m['iconUrl'] = '/assets/icons/partiallyTapped.svg';
      }
    })
    console.log(this.markers);

    this.onMarkerTraversal.subscribe( index => {
      this.lat = this.markers[index].lat;
      this.lng = this.markers[index].long;
      this.zoomLevel = 16;
    });
  }

  logout(): void {
    this.router.navigate(['login']);
  }

  handleKmlClick(): void {
    console.log('KML clicked');
  }

  // markerClicked(index) {
  //   this.emitMarkerClickEvent.next(index);
  // }

  protected mapReady(map) {
    this.map = map;
  }

  public markerClicked = (index) => {
    this.lat = this.markers[index].lat;
    this.lng = this.markers[index].long;
    this.zoomLevel = 16;
    this.emitMarkerClickEvent.next(index);
  }

}
