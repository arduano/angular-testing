import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeckComponent } from './heck/heck.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WaterPageComponent } from './water-page/water-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeckComponent,
    WaterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
