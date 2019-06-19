import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgDeviceModule} from '../../projects/ng-devices/src/lib/ng-device.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    NgDeviceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
