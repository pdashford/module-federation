import {
  startsWith,
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WebElementComponent } from './components/web-element/web-element.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'web-element',
    component: WebElementComponent,
  },
  {
    path: 'react',
    component: WebComponentWrapper,
    data: {
      remoteEntry:
        'https://witty-wave-0a695f710.azurestaticapps.net/remoteEntry.js',
      remoteName: 'react',
      exposedModule: './web-components',
      elementName: 'react-element',
    } as WebComponentWrapperOptions,
  },
  {
    path: 'vue',
    component: WebComponentWrapper,
    data: {
      remoteEntry:
        'https://mango-field-0d0778c10.azurestaticapps.net/remoteEntry.js',
      remoteName: 'vue',
      exposedModule: './web-components',
      elementName: 'vue-element',
    } as WebComponentWrapperOptions,
  },

  {
    path: 'angularjs',
    component: WebComponentWrapper,
    data: {
      remoteEntry:
        'https://calm-mud-0a3ee4a10.azurestaticapps.net/remoteEntry.js',
      remoteName: 'angularjs',
      exposedModule: './web-components',
      elementName: 'angularjs-element',
    } as WebComponentWrapperOptions,
  },
  {
    path: 'angular12',
    component: WebComponentWrapper,
    data: {
      remoteEntry:
        'https://gray-pond-030798810.azurestaticapps.net/remoteEntry.js',
      remoteName: 'angular2',
      exposedModule: './web-components',
      elementName: 'angular2-element',
    } as WebComponentWrapperOptions,
  },
  {
    matcher: startsWith('angular1'),
    component: WebComponentWrapper,
    data: {
      type: 'module',
      remoteEntry: 'http://localhost:4205/remoteEntry.js',
      exposedModule: './web-components',

      elementName: 'angular1-element',
    } as WebComponentWrapperOptions,
  },
  {
    matcher: startsWith('angular3'),
    component: WebComponentWrapper,
    data: {
      remoteEntry:
        'https://gray-river-0b8c23a10.azurestaticapps.net/remoteEntry.js',
      // remoteEntry: 'http://localhost:4202/remoteEntry.js',
      remoteName: 'angular3',
      exposedModule: './web-components',
      elementName: 'angular3-element',
    } as WebComponentWrapperOptions,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
