import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotificationComponent} from './component/notification/notification.component';
import {NotificationListComponent} from './component/notification-list/notification-list.component';


const routes: Routes = [
  {
    path: 'send', component: NotificationComponent
  },
  {
    path: 'notification', component: NotificationListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
