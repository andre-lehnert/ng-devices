# Angular Devices

[![Build Status](https://travis-ci.org/andre-lehnert/ng-devices.svg?branch=master)](https://travis-ci.org/andre-lehnert/ng-devices)

Demo: https://andre-lehnert.github.io/ng-devices/

## ng-devices library

Requires peer dependency: Angular ~7.2.0

### Build local library

`ng build ng-devices`

`cd dist/ng-devices`

`npm pack`

Include archive to your project:

```
package.json

"dependencies": {
    "ng-devices": "file:<path to your archive>/ng-devices-0.0.1.tgz"
}
```

### Build and publish to NPM

_TODO_

### Usage

Import library:
```
app.module.ts

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgDeviceModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

Angular Component and HTML:
```
app.component.ts

...
import {Device} from 'ng-devices';
...

@Component({
  selector: 'app-root',
  template: `
  
    <ng-device [device]="selectedDevice" [landscape]="false">
        <!-- Your content -->
        <h1>Hello World</h1>
    </ng-device>

  `
})
export class AppComponent implements OnInit {

  public selectedDevice: Device = Device.APPLE_MACBOOK_PRO;

  ...
}
```

Minimal HTML:
```
<ng-device></ng-device>
```
