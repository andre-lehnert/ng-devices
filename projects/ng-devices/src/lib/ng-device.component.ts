import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {Device} from './device.enum';

@Component({
  selector: 'ng-device',
  templateUrl: './ng-device.component.html',
  styleUrls: ['../assets/marvel-devices.min.css'],
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class NgDeviceComponent implements OnInit, OnChanges {

  @Input()
  public device: Device = Device.APPLE_IPAD_MINI;

  @Input()
  public landscape = false;

  public Device = Device;

  public isSelected(checkDevice: Device): boolean {
    return this.device === checkDevice;
  }

  public get landscapeMode(): string {
    return this.landscape ? 'landscape' : '';
  }

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
