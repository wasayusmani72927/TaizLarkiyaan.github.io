import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarosoulPageComponent } from './carosoul-page/carosoul-page.component';
import { EssentialArtifactsComponent } from './essential-artifacts/essential-artifacts.component';
import { CommonModule } from '@angular/common';
import {CrystalLightboxModule} from '@crystalui/angular-lightbox';
import { LightboxModule } from 'ngx-lightbox';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    CarosoulPageComponent,
    EssentialArtifactsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule, CrystalLightboxModule,LightboxModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
