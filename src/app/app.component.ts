import {Component} from '@angular/core';
import {Device} from '@ng-devices';

@Component({
  selector: 'angular-device-root',
  template: `
      <div>
        <ng-device [device]="selectedDevice" [landscape]="landscapeMode">
          
         <angular-device-content></angular-device-content>
          
        </ng-device>
      </div>
      
      <div style="display: flex;">
        <div>
          <input id="landscape" type="checkbox" [checked]="landscapeMode"  (change)="landscapeMode = !landscapeMode"/>
          <label for="landscape">Landscape</label>
        </div>
        
        <button type="button" (click)="changeDevice(Device.APPLE_IPAD_MINI)">iPad Mini</button>
        <button type="button" (click)="changeDevice(Device.APPLE_IPHONE_5S)">iPhone 5S</button>
        <button type="button" (click)="changeDevice(Device.APPLE_IPHONE_8)">iPhone 8</button>
        <button type="button" (click)="changeDevice(Device.APPLE_IPHONE_8PLUS)">iPhone 8+</button>
        <button type="button" (click)="changeDevice(Device.APPLE_IPHONE_X)">iPhone X</button>
        <button type="button" (click)="changeDevice(Device.APPLE_MACBOOK_PRO)">MacBook Pro</button>          
      </div>
  `,
  styles: []
})
export class AppComponent {
  public Device = Device;
  public landscapeMode = false;
  public selectedDevice: Device = Device.APPLE_MACBOOK_PRO;

  public changeDevice(device: Device) {
    this.selectedDevice = device;
  }
}
