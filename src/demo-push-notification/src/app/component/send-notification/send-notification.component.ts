import { Component, OnInit } from '@angular/core';
import {NotificationService} from '../../service/notification.service';
import {Notification1} from '../../model/notification1';


@Component({
  selector: 'app-send-notification',
  templateUrl: './send-notification.component.html',
  styleUrls: ['./send-notification.component.css']
})
export class SendNotificationComponent implements OnInit {
  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
  }

  sendNotification(): void {
    const notification: Notification1 = {
      title: 'Thông báo mới',
      message: 'Có thông báo mới từ Ngọc Hậu.'
    };
    this.notificationService.sendNotification(notification);
  }
}
