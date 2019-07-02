import { Component, OnInit } from '@angular/core';
import { LatLngLiteral } from '@agm/core';
import { GeoLocationService } from './services/geo-location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {




  latitude = 30.029240;
  longitude = 31.234178;
  mapType = 'roadmap';  // satellite - hybrid - roadmap - terrain
  Color = 'blue';
  SColor = 'red';
  SWeight = 2;
  SOpacity = 0.8;
  FOpacity = 0.1;

  wallOfSalahAlDin: Array<LatLngLiteral>;
  placesObj: any;
  origin: any;
  destination: any;

  coordinates = {
    latitude:  this.latitude,
    longitude: this.longitude
  };

  constructor(private LocationService: GeoLocationService) {}

  ngOnInit(): void {





    this.LocationService.getPosition().subscribe(
      (pos: Position) => {
          this.coordinates = {
            latitude:  (pos.coords.latitude - 0.0014), // pos.coords.latitude  30.035137
            longitude: (0.0087 + pos.coords.longitude) // pos.coords.longitude  31.351685
          };
          this.origin = { lat: this.coordinates.latitude, lng: this.coordinates.longitude };
          this.destination = { lat: 30.029751, lng: 31.262080 };
      });



    this.wallOfSalahAlDin = [
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


  placeEvent(event, obj) {
      console.log(obj);
  }














  // markers = [
  //   // These are all just random coordinates from https://www.random.org/geographic-coordinates/
  //   { lat: 22.33159, lng: 105.63233, alpha: 1 },
  //   { lat: 7.92658, lng: -12.05228, alpha: 1 },
  //   { lat: 48.75606, lng: -118.859, alpha: 1 },
  //   { lat: 5.19334, lng: -67.03352, alpha: 1 },
  //   { lat: 12.09407, lng: 26.31618, alpha: 1 },
  //   { lat: 47.92393, lng: 78.58339, alpha: 1 }
  // ];

  // geoJsonObject: Object = {
  //       type: 'FeatureCollection',
  //       features: [
  //         {
  //           type: 'Feature',
  //           properties: {
  //             letter: 'Eachawy',
  //             color: 'blue',
  //             rank: '7',
  //             ascii: '71'
  //           },
  //           geometry: {
  //             type: 'Polygon',
  //             coordinates: [
  //               {lat: 25.774, lng: -80.190},
  //               {lat: 18.466, lng: -66.118},
  //               {lat: 32.321, lng: -64.757}
  //             ]
  //           }
  //         }
  //       ]
  //     };



}
