import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CarCompany} from '../../model/car-company';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarCompanyService {
  API_ARL = `http://localhost:8080/car-companies`;

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<CarCompany[]> {
    return this.http.get<CarCompany[]>(this.API_ARL);
  }
}
