import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notification1 } from '../model/notification1';
import * as io from 'socket.io-client';
import {Socket} from 'socket.io';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:8080/notification');
  }

  sendNotification(notification: Notification1) {
    console.log('Gửi thông báo đến server:', notification);
    this.socket.emit('notification', notification);
  }

  getNotifications() {
    return new Observable<Notification1>((observer) => {
      this.socket.on('notification', (notification: Notification1) => {
        observer.next(notification);
      });
    });
  }
}
