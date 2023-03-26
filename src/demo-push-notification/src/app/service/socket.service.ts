import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notification1 } from '../model/notification1';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket: any;

  constructor() {
    this.socket = io('http://localhost:8080/notification');
  }

  sendNotification(notification: Notification1): void {
    this.socket.emit('new-notification', notification);
  }

  listenForNotifications(): Observable<Notification1> {
    return new Observable<Notification1>(observer => {
      this.socket.on('new-notification', (data: Notification1) => {
        observer.next(data);
      });
    });
  }
}
