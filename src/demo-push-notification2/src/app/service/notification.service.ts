import {Injectable} from '@angular/core';
import {StompRService} from '@stomp/ng2-stompjs';
import {Message} from '@angular/compiler/src/i18n/i18n_ast';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NotificationService{

  constructor(private stompService: StompRService) {
    this.stompService.initAndConnect();
  }

  // Gửi message lên server
  sendMessage(message: string) {
    this.stompService.publish('http://localhost:8080/app/message', message);
  }
}


