// angular code module decorater it will take hole angular thing from here

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  // it is an array store all the values
  // all the componenets of the application
  // if componenets are not declare here it will not be recognized in the machine

  declarations: [
    AppComponent,
    HomeComponent
  ],
  // all predefined or user defined module
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // all angular services are added here

  providers: [],
  // which componenets should run first like if i write home componenet it will run first

  bootstrap: [AppComponent]
})
// export  indicates public
export class AppModule { }
// any module any ts file is class file
// class AppModule