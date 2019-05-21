import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { MainRouter } from "./app.router";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    RouterModule.forRoot( MainRouter, {onSameUrlNavigation: 'reload'} )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
