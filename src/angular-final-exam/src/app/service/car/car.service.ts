import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Car} from '../../model/car';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  API_URL = `http://localhost:8080/car-registeres`;

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(this.API_URL);
  }

  findById(id: number): Observable<Car> {
    return this.http.get<Car>(this.API_URL + '/' + id);
  }

  editById(id: number, car: Car): Observable<Car> {
    return this.http.put<Car>(this.API_URL + '/update/' + id, car);
  }

  deleteById(id: number): Observable<Car> {
    return this.http.delete<Car>(this.API_URL + '/delete/' + id);
  }

  save(car: Car): Observable<Car> {
    return this.http.post<Car>(this.API_URL + '/save', car);
  }
}
