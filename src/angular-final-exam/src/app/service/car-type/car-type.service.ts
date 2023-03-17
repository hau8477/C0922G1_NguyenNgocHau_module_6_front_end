import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CarType} from '../../model/car-type';

@Injectable({
  providedIn: 'root'
})
export class CarTypeService {
  API_URL = `http://localhost:8080/car-type`;

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<CarType[]> {
    return this.http.get<CarType[]>(this.API_URL);
  }
}
