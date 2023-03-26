import {Component, OnInit} from '@angular/core';
import {StompService} from '@stomp/ng2-stompjs';
import {NotificationService} from '../../service/notification.service';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  message = 'Có thông báo từ Ngọc Hậu';


  constructor(private notificationService: NotificationService) {
  }

  sendNotification() {
    this.notificationService.sendMessage(this.message);
  }

  ngOnInit(): void {
  }
}
