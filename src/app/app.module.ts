import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

import { AppComponent } from './app.component';
import { GMapComponent } from './GMap/GMap.component';
import { MapComponent } from './map/map.component';

import { HttpClientModule } from '@angular/common/http';
// import { MaterializeModule } from 'angular2-materialize';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    GMapComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAfvVTUL0KjvSlqPUCZt_QL_C_zz4OYfVY'
    }),
    AgmDirectionModule,
    HttpClientModule
    // MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
