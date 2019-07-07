import {NgModule} from '@angular/core';
import {NgDeviceComponent} from './ng-device.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [NgDeviceComponent],
  imports: [
    BrowserModule
  ],
  exports: [NgDeviceComponent]
})
export class NgDeviceModule {
}
