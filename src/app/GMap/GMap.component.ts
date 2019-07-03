import { Component, OnInit, Input } from '@angular/core';
import { LatLngLiteral } from '@agm/core';
import { GeoLocationService } from '../services/geo-location.service';

@Component({
    selector: 'app-gmap',
    template: `
        <agm-map
            [latitude]="coordinates.latitude"
            [longitude]="coordinates.longitude"
            [zoom]="14"
            [mapTypeId]="mapType"
        >


            <!-- <agm-marker
            *ngFor="let marker of markers"
            [latitude]="marker.lat"
            [longitude]="marker.lng"
            [opacity]="marker.alpha"
            [markerDraggable]="true"
            (markerClick)="selectMarker($event)"
            >
            </agm-marker> -->


            <agm-direction [origin]="origin" [destination]="destination">
            </agm-direction>




            <agm-marker
                [latitude]="coordinates.latitude"
                [longitude]="coordinates.longitude"
            >
            </agm-marker>

            <agm-polygon
                [paths]="path"
                [fillColor]="Color"
                [strokeColor]="SColor"
                [strokeWeight]="SWeight"
                [fillOpacity]="FOpacity"
                [strokeOpacity]="SOpacity"
            >
            </agm-polygon>


            <agm-circle
                *ngFor="let place of placesObj"
                [latitude]="place.lat"
                [longitude]="place.log"
                [radius]="place.radius"
                [fillColor]="place.FColor"
                (circleClick)="placeEvent($event, place)"
            >
            </agm-circle>

            <!-- <agm-data-layer [geoJson]="geoJsonObject" (layerClick)="clicked($event)" [style]="styleFunc">
            </agm-data-layer> -->

        </agm-map>
    `
})

export class GMapComponent  implements OnInit {

    @Input() latitude: number;
    @Input() longitude: number;
    @Input() mapType: string;  // satellite - hybrid - roadmap - terrain;
    @Input() Color: string;
    @Input() SColor: string;
    @Input() SWeight: number;
    @Input() SOpacity: number;
    @Input() FOpacity: number;
    @Input() path: Array<LatLngLiteral>;
    @Input() placesObj: any;
    @Input() origin: any;
    @Input() destination: any;
    @Input() coordinates: any;


    constructor(private LocationService: GeoLocationService) {}

    ngOnInit(): void {

        this.coordinates = {
            latitude:  this.latitude,
            longitude: this.longitude
        };

    }

    placeEvent(event, obj) {
        console.log(obj);
    }

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
