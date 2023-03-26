import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SendNotificationComponent} from './component/send-notification/send-notification.component';
import {ReceiveNotificationComponent} from './component/receive-notification/receive-notification.component';


const routes: Routes = [
  {
    path: 'send', component: SendNotificationComponent
  },
  {
    path: 'receive', component: ReceiveNotificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
