import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { MainRouter } from "./app.router";
import { HeaderComponent } from "./components/header/header.component";
import { AuthService } from "./services/auth/auth.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    RouterModule.forRoot( MainRouter, {onSameUrlNavigation: 'reload'} )
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
