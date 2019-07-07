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


## angular-devices web component

Demo: https://andre-lehnert.github.io/ng-devices/assets/web-component/

- [Medium Article 1](https://medium.com/@kitson.mac/wrapping-an-angular-app-in-a-custom-element-web-component-angular-element-in-4-simple-steps-ded3554e9006)
- [Medium Article 2](https://medium.com/@tomsu/building-web-components-with-angular-elements-746cd2a38d5b)
- [@webcomponents/webcomponentsjs ployfills](https://github.com/webcomponents/polyfills/tree/master/packages/webcomponentsjs)
- [Zone.js problems](https://blog.bitsrc.io/how-angular-uses-ngzone-zone-js-for-dirty-checking-faa12f98cd49)

`npm run package` to generate the angular-devices.js file in the root folder

`http-server -o` to provide the index.html in the root folder

Optional `npm run package:gzip` to reduce the file size from 240 KB to 60 KB.
The http server have to support `content-encoding: gzip` response headers.