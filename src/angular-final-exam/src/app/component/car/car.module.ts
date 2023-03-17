import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing.module';
import {CarListComponent} from './car-list/car-list.component';
import {CarEditComponent} from './car-edit/car-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CarCreateComponent } from './car-create/car-create.component';


@NgModule({
  declarations: [
    CarListComponent,
    CarEditComponent,
    CarCreateComponent
  ],
  imports: [
    CommonModule,
    CarRoutingModule,
    ReactiveFormsModule
  ]
})
export class CarModule { }
