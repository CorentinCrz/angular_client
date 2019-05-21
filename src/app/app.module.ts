import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { MainRouter } from "./app.router";
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,

    RouterModule.forRoot( MainRouter, {onSameUrlNavigation: 'reload'} )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
