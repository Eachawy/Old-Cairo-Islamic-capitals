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
  dataPlaceSelected: string;

  changeThemeStyle: any;


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
        id: 6,
        lat: 30.054468,
        log: 31.263696,
        radius: 53,
        FColor: 'red',
        data: 'مسجد الحاكم بأمر الله'
      },
      {
        id: 7,
        lat: 30.052476,
        log: 31.261873,
        radius: 23,
        FColor: 'red',
        data: 'مسجد سليمان اغا السلحدار'
      },
      {
        id: 8,
        lat: 30.051515,
        log: 31.262012,
        radius: 23,
        FColor: 'red',
        data: 'مسجد الاقمر'
      },
      {
        id: 3,
        lat: 30.028731,
        log: 31.249563,
        radius: 120,
        FColor: 'red',
        data: 'مسجد احمد بن طولون'
      },
      {
        id: 4,
        lat: 30.032267,
        log: 31.256192,
        radius: 94,
        FColor: 'red',
        data: 'مدرسة ومسجد السلطان حسن'
      },
      {
        id: 5,
        lat: 30.032810,
        log: 31.257096,
        radius: 70,
        FColor: 'red',
        data: 'مسجد الرفاعى'
      }
    ];
  }

  schools() {
    this.clearAction();
    this.placesObj = [
      {
        id: 1,
        lat: 30.049444,
        log: 31.260746,
        radius: 40,
        FColor: 'blue',
        data: 'مدرسة السلطان قلاوون'
      },
      {
        id: 2,
        lat: 30.049894,
        log: 31.260832,
        radius: 30,
        FColor: 'blue',
        data: 'مدرسة السلطان محمد بن قلاوون'
      },
      {
        id: 3,
        lat: 30.050122,
        log: 31.260934,
        radius: 30,
        FColor: 'blue',
        data: 'مدرسة السلطان الظاهر برقوق'
      },
      {
        id: 4,
        lat: 30.048966,
        log: 31.261331,
        radius: 10,
        FColor: 'blue',
        data: 'مدرسة وقبة السلطان الصالح نجم الدين ايوب'
      },
      {
        id: 5,
        lat: 30.047382,
        log: 31.260065,
        radius: 20,
        FColor: 'blue',
        data: 'مدرسة السلطان الاشرف برسباي'
      }
    ];
  }

  castleOfSalahAlDin() {
    this.clearAction();
    this.placesObj = [
      {
        id: 1,
        lat: 30.029751,
        log: 31.262080,
        radius: 450,
        FColor: 'red',
        data: 'قلعة صلاح الدين الايوبي'
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
    this.viewSetting = ! this.viewSetting;
  }

  selectPlace($event) {
    this.dataPlaceSelected = $event.data;
  }

  changeTheme() {
    this.changeThemeStyle = [
      {
          'featureType': 'all',
          'elementType': 'geometry.fill',
          'stylers': [
              {
                  'weight': '2.00'
              }
          ]
      },
      {
          'featureType': 'all',
          'elementType': 'geometry.stroke',
          'stylers': [
              {
                  'color': '#9c9c9c'
              }
          ]
      },
      {
          'featureType': 'all',
          'elementType': 'labels.text',
          'stylers': [
              {
                  'visibility': 'on'
              }
          ]
      },
      {
          'featureType': 'landscape',
          'elementType': 'all',
          'stylers': [
              {
                  'color': '#f2f2f2'
              }
          ]
      },
      {
          'featureType': 'landscape',
          'elementType': 'geometry.fill',
          'stylers': [
              {
                  'color': '#ffffff'
              }
          ]
      },
      {
          'featureType': 'landscape.man_made',
          'elementType': 'geometry.fill',
          'stylers': [
              {
                  'color': '#ffffff'
              }
          ]
      },
      {
          'featureType': 'poi',
          'elementType': 'all',
          'stylers': [
              {
                  'visibility': 'on'
              }
          ]
      },
      {
          'featureType': 'road',
          'elementType': 'all',
          'stylers': [
              {
                  'saturation': -100
              },
              {
                  'lightness': 45
              }
          ]
      },
      {
          'featureType': 'road',
          'elementType': 'geometry.fill',
          'stylers': [
              {
                  'color': '#eeeeee'
              }
          ]
      },
      {
          'featureType': 'road',
          'elementType': 'labels.text.fill',
          'stylers': [
              {
                  'color': '#7b7b7b'
              }
          ]
      },
      {
          'featureType': 'road',
          'elementType': 'labels.text.stroke',
          'stylers': [
              {
                  'color': '#ffffff'
              }
          ]
      },
      {
          'featureType': 'road.highway',
          'elementType': 'all',
          'stylers': [
              {
                  'visibility': 'simplified'
              }
          ]
      },
      {
          'featureType': 'road.arterial',
          'elementType': 'labels.icon',
          'stylers': [
              {
                  'visibility': 'off'
              }
          ]
      },
      {
          'featureType': 'transit',
          'elementType': 'all',
          'stylers': [
              {
                  'visibility': 'off'
              }
          ]
      },
      {
          'featureType': 'water',
          'elementType': 'all',
          'stylers': [
              {
                  'color': '#46bcec'
              },
              {
                  'visibility': 'on'
              }
          ]
      },
      {
          'featureType': 'water',
          'elementType': 'geometry.fill',
          'stylers': [
              {
                  'color': '#c8d7d4'
              }
          ]
      },
      {
          'featureType': 'water',
          'elementType': 'labels.text.fill',
          'stylers': [
              {
                  'color': '#070707'
              }
          ]
      },
      {
          'featureType': 'water',
          'elementType': 'labels.text.stroke',
          'stylers': [
              {
                  'color': '#ffffff'
              }
          ]
      }
  ];
  }


}
