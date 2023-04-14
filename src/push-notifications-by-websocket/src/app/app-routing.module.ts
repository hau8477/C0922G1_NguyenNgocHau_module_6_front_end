import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SendComponent} from "./send/send.component";
import {SeenComponent} from "./seen/seen.component";


const routes: Routes = [
  {
    path: 'send', component: SendComponent
  },
  {
    path: 'seen', component: SeenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
