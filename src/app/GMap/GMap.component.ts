import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LatLngLiteral } from '@agm/core';



@Component({
    selector: 'app-gmap',
    template: `
        <agm-map
            [latitude]="latitude"
            [longitude]="longitude"
            [zoom]="zoomMap"
            [mapTypeId]="mapType"
            [styles]= "mStyle"
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


            <agm-direction
                *ngIf="directionData"
                [origin]="directionData.origin"
                [destination]="directionData.destination"
                [visible]="show"
                [panel]="myPanel"
                [renderOptions]="renderOptions"
                [markerOptions]="markerOptions"
            >
            </agm-direction>



            <<ng-container *ngIf="placesObj">
                <agm-marker
                    *ngFor="let place of placesObj"
                    [latitude]="place.lat"
                    [longitude]="place.log"
                    (markerClick)="placeEvent($event, place)"
                    [iconUrl]= "mIcon"
                >
                </agm-marker>
            </ng-container>


            <agm-polygon
                *ngIf="path"
                [paths]="path"
                [fillColor]="Color"
                [strokeColor]="SColor"
                [strokeWeight]="SWeight"
                [fillOpacity]="FOpacity"
                [strokeOpacity]="SOpacity"
            >
            </agm-polygon>

            <ng-container *ngIf="placesObj">
                <agm-circle
                    *ngFor="let place of placesObj"
                    [latitude]="place.lat"
                    [longitude]="place.log"
                    [radius]="place.radius"
                    [fillColor]="place.FColor"
                    (circleClick)="placeEvent($event, place)"
                >
                </agm-circle>
            </ng-container>
            <!-- <agm-data-layer [geoJson]="geoJsonObject" (layerClick)="clicked($event)" [style]="styleFunc">
            </agm-data-layer> -->

        </agm-map>

        <div class="viewPanel" #myPanel></div>
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
    @Input() directionData: any;
    @Input() coordinates: any;
    @Input() show: boolean;
    @Input() zoomMap: number;
    @Input() mStyle: any;
    @Output() selected  = new EventEmitter<any>();

    public mIcon: any;


    public renderOptions = {
        suppressMarkers: true,
    };

    public markerOptions = {
        origin: {
            icon: '../../assets/img/current.png'
        },
        destination: {
            icon: '../../assets/img/goal.png'
        },
    };


    constructor() {}

    ngOnInit(): void {

        this.mIcon = '../../assets/img/goal.png';

        if (this.coordinates) {

            this.coordinates = {
                latitude:  this.latitude,
                longitude: this.longitude
            };
        }

    }

    placeEvent(event, obj) {
        this.selected.emit(obj);
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
