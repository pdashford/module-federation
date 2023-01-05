import { WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { Component } from '@angular/core';

@Component({
  selector: 'app-web-element',
  templateUrl: './web-element.component.html',
  styleUrls: ['./web-element.component.scss'],
})
export class WebElementComponent {
  item: WebComponentWrapperOptions = {
    remoteEntry: 'http://localhost:4205/remoteEntry.js',
    exposedModule: './web-components',
    elementName: 'angular1-element',
    type: 'module',
  };
}
