import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { SendNotificationComponent } from './component/send-notification/send-notification.component';
import { ReceiveNotificationComponent } from './component/receive-notification/receive-notification.component';

@NgModule({
  declarations: [
    AppComponent,
    SendNotificationComponent,
    ReceiveNotificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
