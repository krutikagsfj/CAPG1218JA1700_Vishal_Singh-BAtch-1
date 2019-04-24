import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileComponent } from './components/mobile/mobile.component';
import { HttpClientModule } from '@angular/common/http'; //imported for http
import { SortPipe } from './pipes/sort.pipe';   //Pipe imported



@NgModule({
  declarations: [
    AppComponent,
    MobileComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule  //import HttpClientModule for http request
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
