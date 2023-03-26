import { Component, OnInit } from '@angular/core';
import {Notification1} from '../../model/notification1';
import {SocketService} from '../../service/socket.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-receive-notification',
  templateUrl: './receive-notification.component.html',
  styleUrls: ['./receive-notification.component.css']
})
export class ReceiveNotificationComponent implements OnInit {
  notifications: Notification1[] = [];

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    this.socketService.listenForNotifications().subscribe((notification: Notification1) => {
      this.notifications.push(notification);
      Swal.fire({
        icon: 'info',
        title: notification.title,
        text: notification.message
      });
      console.log('Đã nhận được thông báo:', notification);
    });
  }
}
