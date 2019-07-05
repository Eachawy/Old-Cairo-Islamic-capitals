import { Component, OnInit } from '@angular/core';
import { LatLngLiteral } from '@agm/core';
import { GeoLocationService } from '../services/geo-location.service';
import { dataService } from '../services/data.services';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html'
})
export class MapComponent implements OnInit {

  public latitude: number;
  public longitude: number;
  public mapType: string;  // satellite - hybrid - roadmap - terrain;
  public Color: string;
  public SColor: string;
  public SWeight: number;
  public SOpacity: number;
  public FOpacity: number;
  public path: Array<LatLngLiteral>;
  public placesObj: any;
  public directionObj: any;
  public coordinates: any;
  public dirView: boolean;
  public zoom: number;
  public changeThemeStyle: any;
  public dataPlaceSelected: any;

  public viewSetting = false;


  constructor(private LocationService: GeoLocationService, private DService: dataService) { }

  ngOnInit() {
      this.latitude = 30.029240;
      this.longitude = 31.234178;
      this.mapType = 'roadmap';
      this.zoom = 15;
  }

  masjed() {
    this.clearAction();
    this.DService.getMasjedData().subscribe( (res :any) => {
        this.placesObj = res.body;
    })
  }

  schools() {
    this.clearAction();
    this.DService.getSchoolsData().subscribe((res: any) => {
      this.placesObj = res.body;
    });
  }

  castleOfSalahAlDin() {
    this.clearAction();
    this.DService.getCastlesData().subscribe( (res:any) => {
        this.placesObj = res.body;
    });
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
            latitude:  +pos.coords.latitude, // pos.coords.latitude  30.035137  --0.0014
            longitude: +pos.coords.longitude // pos.coords.longitude  31.351685 --0.0087 
          };

          this.directionObj = {
            origin : { lat: this.coordinates.latitude, lng: this.coordinates.longitude },
            destination : { lat: this.dataPlaceSelected['lat'], lng: this.dataPlaceSelected['log'] }
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
    this.dataPlaceSelected = $event;
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
