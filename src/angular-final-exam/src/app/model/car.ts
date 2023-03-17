import {City} from './city';
import {CarType} from './car-type';
import {CarCompany} from './car-company';

export interface Car {
  id?: number;
  numberPlate: number;
  carType: CarType;
  carCompany: CarCompany;
  startCity: City;
  endCity: City;
  phoneNumber: string;
  email: string;
  startHour: string;
  endHour: string;
}
