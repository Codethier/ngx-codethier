import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxCodethierModule} from "ngx-codethier";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxCodethierModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
