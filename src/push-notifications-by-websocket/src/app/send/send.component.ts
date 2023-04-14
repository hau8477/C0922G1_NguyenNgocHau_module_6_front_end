import { Component, OnInit } from '@angular/core';
import {WebsocketService} from "../service/websocket.service";

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {

  constructor(private websocketService: WebsocketService) { }

  ngOnInit(): void {
  }

  send() {
    this.websocketService.callServer().subscribe();
  }
}
