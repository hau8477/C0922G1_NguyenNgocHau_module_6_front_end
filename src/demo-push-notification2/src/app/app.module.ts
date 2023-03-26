import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationComponent } from './component/notification/notification.component';
import { NotificationListComponent } from './component/notification-list/notification-list.component';
import {SocketIoModule} from 'ngx-socket-io';
import {StompService} from '@stomp/ng2-stompjs';

@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    NotificationListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot({url: 'http://localhost:8080/ws'})
  ],
  providers: [StompService],
  bootstrap: [AppComponent]
})
export class AppModule { }
