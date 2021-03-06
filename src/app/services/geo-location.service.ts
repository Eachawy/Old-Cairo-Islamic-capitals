import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GeoLocationService {

  coordinates: any;

  constructor() { }

  public getPosition(): Observable<Position> {
    return Observable.create(
      (observer) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos: Position) => {
              observer.next(pos);
            });
        }
    });
  }

}