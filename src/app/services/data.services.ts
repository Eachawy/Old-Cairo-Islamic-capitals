import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpResponse, HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class dataService {
    
    constructor(private http: HttpClient){}

    getSchoolsData(): Observable<HttpResponse<any>>{
        return this.http.get<any>('../assets/data/school.json?cb=' + new Date().getTime(), {
            observe: 'response'
          });
    }

    getMasjedData(): Observable<HttpResponse<any>> {
        return this.http.get<any>('./assets/data/masjed.json?cb=' + new Date().getTime(), {
            observe: 'response'
        });
    }


    getCastlesData():Observable<HttpResponse<any>> {
        return this.http.get('./assets/data/castles.json?cb=' + new Date().getTime(), {
            observe: 'response'
        })
    }
}