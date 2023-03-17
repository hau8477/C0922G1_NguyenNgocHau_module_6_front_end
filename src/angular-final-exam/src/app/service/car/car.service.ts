import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Car} from '../../model/car';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  API_URL = `http://localhost:3000/car`;

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(this.API_URL + '?_sort=startHour&_order=desc');
  }

  findById(id: number): Observable<Car> {
    return this.http.get<Car>(this.API_URL + '/' + id);
  }

  editById(id: number, car: Car): Observable<Car> {
    return this.http.put<Car>(this.API_URL + '/' + id, car);
  }

  deleteById(id: number): Observable<Car> {
    return this.http.delete<Car>(this.API_URL + '/' + id);
  }
}
