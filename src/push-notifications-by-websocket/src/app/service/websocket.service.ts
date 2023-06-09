import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import SockJs from "sockjs-client";

import Stomp from "stompjs";
@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor(private http: HttpClient) {
  }

  // Open connection with the back-end socket
  public connect() {
    let socket = new SockJs(`http://localhost:8080/socket`);

    let stompClient = Stomp.over(socket);

    return stompClient;
  }

  callServer() {
    return this.http.get('http://localhost:8080/notify');
  }
}
