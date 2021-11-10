import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';


import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { HomeModule } from './pages/home/home.module';
import { ContainerAppComponent } from './pages/container-app/container-app.component'
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ContainerAppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
