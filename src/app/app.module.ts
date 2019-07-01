import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { SettingComponent } from './setting/setting.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAfvVTUL0KjvSlqPUCZt_QL_C_zz4OYfVY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
