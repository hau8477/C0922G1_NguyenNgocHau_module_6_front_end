import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SendComponent } from './send/send.component';
import { SeenComponent } from './seen/seen.component';

@NgModule({
  declarations: [
    AppComponent,
    SendComponent,
    SeenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
