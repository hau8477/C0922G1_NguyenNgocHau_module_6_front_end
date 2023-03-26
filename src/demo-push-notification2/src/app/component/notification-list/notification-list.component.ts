import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {StompService} from '@stomp/ng2-stompjs';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
})
export class NotificationListComponent implements OnInit {

  constructor(private stompService: StompService) {
  }

  ngOnInit() {
    // Kết nối đến server
    this.stompService.initAndConnect();

    // Subscribe để nhận message từ server
    this.stompService.subscribe('http://localhost:8080/topic/messages').subscribe((message) => {
      console.log(message);
      Swal.fire({
        icon: 'info',
        title: message.body,
        text: message.body
      });
    });
  }
}
