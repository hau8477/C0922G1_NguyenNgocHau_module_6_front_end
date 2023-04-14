import { Component, OnInit } from '@angular/core';
import {WebsocketService} from "../service/websocket.service";

@Component({
  selector: 'app-seen',
  templateUrl: './seen.component.html',
  styleUrls: ['./seen.component.css']
})
export class SeenComponent implements OnInit {

  constructor(private websocketService: WebsocketService) {
    let stompClient = this.websocketService.connect();
    stompClient.connect({}, frame => {
      console.log(frame);
      stompClient.subscribe('/topic/notification', notifications => {
        console.log(notifications.body);
      })
    });
  }

  ngOnInit(): void {
  }

}
