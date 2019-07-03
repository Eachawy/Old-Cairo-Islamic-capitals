import { Component, OnInit } from '@angular/core';
import { LatLngLiteral } from '@agm/core';
import { GeoLocationService } from '../services/geo-location.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html'
})
export class MapComponent implements OnInit {

  latitude: number;
  longitude: number;
  mapType: string;  // satellite - hybrid - roadmap - terrain;
  Color: string;
  SColor: string;
  SWeight: number;
  SOpacity: number;
  FOpacity: number;
  path: Array<LatLngLiteral>;
  placesObj: any;
  directionObj: any;
  coordinates: any;
  dirView: boolean;
  zoom: number;

  viewSetting = false;




  constructor(private LocationService: GeoLocationService) { }

  ngOnInit() {

      this.latitude = 30.029240;
      this.longitude = 31.234178;
      this.mapType = 'roadmap';
      this.zoom = 15;
  }

  masjed() {
    this.clearAction();

    this.placesObj = [
      {
        id: 2,
        lat: 30.029751,
        log: 31.262080,
        radius: 450,
        FColor: 'red'
      },
      {
        id: 3,
        lat: 30.028731,
        log: 31.249563,
        radius: 120,
        FColor: 'red'
      },
      {
        id: 4,
        lat: 30.032267,
        log: 31.256192,
        radius: 94,
        FColor: 'red'
      },
      {
        id: 5,
        lat: 30.032810,
        log: 31.257096,
        radius: 70,
        FColor: 'red'
      }
    ];
  }

  wallOfSalahAlDin() {
    this.clearAction();

    this.Color = 'blue';
    this.SColor = 'red';
    this.SWeight = 2;
    this.SOpacity = 0.8;
    this.FOpacity = 0.1;

    this.path = [
      { lat: 29.996257,  lng: 31.228073 },
      { lat: 30.060993,  lng: 31.245728 },
      { lat: 30.059247, lng: 31.247936 },
      { lat: 30.057297, lng: 31.251796 },
      { lat: 30.055904, lng: 31.253963 },
      { lat: 30.056072, lng: 31.260547 },

      { lat: 30.056640, lng: 31.261398 },
      { lat: 30.055600, lng: 31.263585},
      { lat: 30.054300, lng: 31.265258},
      { lat: 30.052297, lng: 31.269968},
      { lat: 30.052066, lng: 31.270957},
      { lat: 30.040633, lng: 31.262674},
      { lat: 30.032277, lng: 31.260055},
      { lat: 30.031107, lng: 31.257932},
      { lat: 30.028432, lng: 31.258275},
      { lat: 30.027262, lng: 31.259219}
    ];
  }

  direction() {
    this.clearAction();
    this.dirView = true;
    this.LocationService.getPosition().subscribe(
      (pos: Position) => {
          this.coordinates = {
            latitude:  (pos.coords.latitude - 0.0014), // pos.coords.latitude  30.035137
            longitude: (0.0087 + pos.coords.longitude) // pos.coords.longitude  31.351685
          };
          console.log(`${this.coordinates.latitude} === ${this.coordinates.longitude}`);
          this.directionObj = {
            origin : { lat: this.coordinates.latitude, lng: this.coordinates.longitude },
            destination : { lat: 30.029751, lng: 31.262080 }
          };
    });
  }


  clearAction() {
    this.path = [];
    this.coordinates = {};
    this.dirView = false;
    this.placesObj  = [];
  }



  openSettingFn() {
    this.viewSetting =! this.viewSetting;
  }
}
