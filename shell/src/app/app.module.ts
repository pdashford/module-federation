import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ModuleFederationToolsModule } from '@angular-architects/module-federation-tools';
import { WebElementComponent } from './components/web-element/web-element.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, WebElementComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ModuleFederationToolsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
