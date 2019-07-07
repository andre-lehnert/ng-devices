import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgDeviceModule} from '../../projects/ng-devices/src/lib/ng-device.module';
import {ContentComponent} from './content/content.component';
import {createCustomElement} from '@angular/elements';

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
export class AppModule {
  constructor(private injector: Injector) {
    const ngDevices = createCustomElement(AppComponent, { injector });
    customElements.define('angular-devices', ngDevices)
  }
}
