import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CarListComponent} from './car-list/car-list.component';
import {CarEditComponent} from './car-edit/car-edit.component';
import {CarCreateComponent} from './car-create/car-create.component';


const routes: Routes = [
  {
    path: 'list', component: CarListComponent
  },
  {
    path: 'edit/:id', component: CarEditComponent
  },
  {
    path: 'create', component: CarCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule {
}
